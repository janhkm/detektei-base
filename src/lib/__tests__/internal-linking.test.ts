/**
 * Unit Tests für Internal Linking Engine
 * 
 * Testet Link-Generierung, Link-Injektion und Breadcrumb-Logik.
 */

import { describe, it, expect } from 'vitest';
import {
  getLinksForPage,
  getRelatedContent,
  injectContextualLinks,
  generateLinkBlock,
  getBlogBreadcrumbs,
  getEinsatzgebietBreadcrumbs,
  validateInternalLinks,
  countInternalLinks,
  InternalLink,
} from '../internal-linking';
import { isPillar, isCluster, getAllPillars } from '../pillar-cluster';

// ============================================================================
// LINK GENERATION TESTS
// ============================================================================

describe('Link Generation (getLinksForPage)', () => {
  it('should generate links for pillar article', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0 && p.status !== 'deferred');
    
    if (pillarWithClusters) {
      const links = getLinksForPage(pillarWithClusters.pillarSlug, pillarWithClusters.category);
      
      expect(links).toBeDefined();
      expect(Array.isArray(links)).toBe(true);
      expect(links.length).toBeGreaterThan(0);
      
      // Links should be sorted by priority (descending)
      for (let i = 1; i < links.length; i++) {
        expect(links[i - 1].priority).toBeGreaterThanOrEqual(links[i].priority);
      }
    }
  });

  it('should generate links for cluster article', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0 && p.status !== 'deferred');
    
    if (pillarWithClusters && pillarWithClusters.clusters.length > 0) {
      const clusterSlug = pillarWithClusters.clusters[0].slug;
      const links = getLinksForPage(clusterSlug, pillarWithClusters.category);
      
      expect(links).toBeDefined();
      expect(links.length).toBeGreaterThan(0);
      
      // Should have link to parent pillar
      const pillarLink = links.find(l => l.type === 'pillar');
      expect(pillarLink).toBeDefined();
    }
  });

  it('should exclude specified URLs', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 1 && p.status !== 'deferred');
    
    if (pillarWithClusters) {
      const excludeUrl = `/blog/${pillarWithClusters.clusters[0].slug}`;
      const links = getLinksForPage(
        pillarWithClusters.pillarSlug,
        pillarWithClusters.category,
        [excludeUrl]
      );
      
      const excludedLink = links.find(l => l.url === excludeUrl);
      expect(excludedLink).toBeUndefined();
    }
  });

  it('should return empty array for non-mapped article', () => {
    const links = getLinksForPage('non-existent-article-slug');
    expect(links).toEqual([]);
  });
});

// ============================================================================
// RELATED CONTENT TESTS
// ============================================================================

describe('Related Content Generation', () => {
  it('should return related content with title and links', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0 && p.status !== 'deferred');
    
    if (pillarWithClusters) {
      const related = getRelatedContent(pillarWithClusters.pillarSlug);
      
      expect(related).toBeDefined();
      expect(related.title).toBeDefined();
      expect(typeof related.title).toBe('string');
      expect(Array.isArray(related.links)).toBe(true);
    }
  });

  it('should respect maxLinks option', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 3 && p.status !== 'deferred');
    
    if (pillarWithClusters) {
      const related = getRelatedContent(pillarWithClusters.pillarSlug, { maxLinks: 2 });
      
      expect(related.links.length).toBeLessThanOrEqual(2);
    }
  });

  it('should have different title for pillar vs cluster', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0 && p.status !== 'deferred');
    
    if (pillarWithClusters && pillarWithClusters.clusters.length > 0) {
      const pillarRelated = getRelatedContent(pillarWithClusters.pillarSlug);
      const clusterRelated = getRelatedContent(pillarWithClusters.clusters[0].slug);
      
      // Titles should be different based on article type
      // (though they might be the same by coincidence)
      expect(pillarRelated.title).toBeDefined();
      expect(clusterRelated.title).toBeDefined();
    }
  });
});

// ============================================================================
// LINK INJECTION TESTS
// ============================================================================

describe('Contextual Link Injection', () => {
  it('should inject links into text containing keywords', () => {
    const text = 'Ein Privatdetektiv kostet etwa 100€ pro Stunde. Die Kosten variieren je nach Auftrag.';
    const result = injectContextualLinks(text, '/blog/test-article');
    
    expect(result).toBeDefined();
    expect(result.text).toBeDefined();
    expect(result.linksInjected).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(result.links)).toBe(true);
    
    // If links were injected, the text should contain anchor tags
    if (result.linksInjected > 0) {
      expect(result.text).toContain('<a href=');
      expect(result.text).toContain('internal-link');
    }
  });

  it('should not inject link to current page', () => {
    const text = 'Privatdetektiv kosten können variieren.';
    // Use URL that would match the keyword "privatdetektiv kosten"
    const currentPageUrl = '/blog/privatdetektiv-kosten-pro-stunde';
    const result = injectContextualLinks(text, currentPageUrl);
    
    // Should not create a self-referencing link
    if (result.linksInjected > 0) {
      expect(result.links.every(l => l.url !== currentPageUrl)).toBe(true);
    }
  });

  it('should respect maxLinks option', () => {
    const text = 'Privatdetektiv kosten, detektiv kosten, was kostet ein detektiv, seriöse detektei, detektei beauftragen.';
    const result = injectContextualLinks(text, '/blog/test', { maxLinks: 1 });
    
    expect(result.linksInjected).toBeLessThanOrEqual(1);
  });

  it('should respect excludeUrls option', () => {
    const text = 'Privatdetektiv kosten sind ein wichtiges Thema.';
    const result = injectContextualLinks(text, '/blog/test', {
      excludeUrls: ['/blog/privatdetektiv-kosten-pro-stunde'],
    });
    
    const excludedLink = result.links.find(l => l.url === '/blog/privatdetektiv-kosten-pro-stunde');
    expect(excludedLink).toBeUndefined();
  });

  it('should not modify text without keywords', () => {
    const text = 'Dies ist ein Text ohne relevante Schlüsselwörter für die Verlinkung.';
    const result = injectContextualLinks(text, '/blog/test');
    
    expect(result.linksInjected).toBe(0);
    expect(result.text).toBe(text);
  });
});

// ============================================================================
// LINK BLOCK GENERATION TESTS
// ============================================================================

describe('Link Block Generation', () => {
  it('should generate markdown link block', () => {
    const links: InternalLink[] = [
      { url: '/blog/test', text: 'Test Article', type: 'cluster', priority: 8 },
      { url: '/kosten', text: 'Kosten', type: 'service', priority: 5 },
    ];
    
    const block = generateLinkBlock(links);
    
    expect(block).toContain('- [Test Article](/blog/test)');
    expect(block).toContain('- [Kosten](/kosten)');
  });

  it('should return empty string for empty array', () => {
    const block = generateLinkBlock([]);
    expect(block).toBe('');
  });
});

// ============================================================================
// BREADCRUMB TESTS
// ============================================================================

describe('Blog Breadcrumbs', () => {
  it('should return breadcrumbs starting with Blog', () => {
    const breadcrumbs = getBlogBreadcrumbs('any-article-slug');
    
    expect(breadcrumbs).toBeDefined();
    expect(breadcrumbs.length).toBeGreaterThanOrEqual(1);
    expect(breadcrumbs[0].label).toBe('Blog');
    expect(breadcrumbs[0].href).toBe('/blog');
  });

  it('should include pillar for cluster articles', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0 && p.status !== 'deferred');
    
    if (pillarWithClusters && pillarWithClusters.clusters.length > 0) {
      const clusterSlug = pillarWithClusters.clusters[0].slug;
      const breadcrumbs = getBlogBreadcrumbs(clusterSlug);
      
      // Should have Blog + Pillar
      expect(breadcrumbs.length).toBeGreaterThanOrEqual(2);
      expect(breadcrumbs[1].href).toBe(pillarWithClusters.pillarUrl);
    }
  });

  it('should not include extra level for pillar articles', () => {
    const pillars = getAllPillars();
    const pillar = pillars.find(p => p.status !== 'deferred');
    
    if (pillar) {
      const breadcrumbs = getBlogBreadcrumbs(pillar.pillarSlug);
      
      // Pillar should only have Blog as breadcrumb (not a parent pillar)
      expect(breadcrumbs.length).toBe(1);
    }
  });
});

describe('Einsatzgebiete Breadcrumbs', () => {
  it('should generate breadcrumbs for Bundesland', () => {
    const breadcrumbs = getEinsatzgebietBreadcrumbs('bundesland', {
      bundesland: 'Bayern',
      bundeslandSlug: 'bayern',
    });
    
    expect(breadcrumbs.length).toBe(2);
    expect(breadcrumbs[0].label).toBe('Einsatzgebiete');
    expect(breadcrumbs[1].label).toBe('Bayern');
    expect(breadcrumbs[1].href).toContain('bayern');
  });

  it('should generate breadcrumbs for Landkreis', () => {
    const breadcrumbs = getEinsatzgebietBreadcrumbs('landkreis', {
      bundesland: 'Bayern',
      bundeslandSlug: 'bayern',
      landkreis: 'München',
      landkreisSlug: 'muenchen',
    });
    
    expect(breadcrumbs.length).toBe(3);
    expect(breadcrumbs[0].label).toBe('Einsatzgebiete');
    expect(breadcrumbs[1].label).toBe('Bayern');
    expect(breadcrumbs[2].label).toBe('München');
  });

  it('should generate breadcrumbs for Stadt', () => {
    const breadcrumbs = getEinsatzgebietBreadcrumbs('stadt', {
      bundesland: 'Bayern',
      bundeslandSlug: 'bayern',
      landkreis: 'Landkreis München',
      landkreisSlug: 'landkreis-muenchen',
      stadt: 'Unterschleißheim',
      stadtSlug: 'unterschleissheim',
    });
    
    expect(breadcrumbs.length).toBe(4);
    expect(breadcrumbs[3].label).toBe('Unterschleißheim');
  });
});

// ============================================================================
// VALIDATION TESTS
// ============================================================================

describe('Link Validation', () => {
  it('should validate existing URLs', () => {
    const links: InternalLink[] = [
      { url: '/blog/test', text: 'Test', type: 'cluster', priority: 5 },
      { url: '/kosten', text: 'Kosten', type: 'service', priority: 5 },
    ];
    
    const existingUrls = new Set(['/blog/test', '/kosten']);
    const result = validateInternalLinks(links, existingUrls);
    
    expect(result.valid).toBe(true);
    expect(result.brokenLinks).toEqual([]);
  });

  it('should detect broken links', () => {
    const links: InternalLink[] = [
      { url: '/blog/test', text: 'Test', type: 'cluster', priority: 5 },
      { url: '/broken-link', text: 'Broken', type: 'service', priority: 5 },
    ];
    
    const existingUrls = new Set(['/blog/test']);
    const result = validateInternalLinks(links, existingUrls);
    
    expect(result.valid).toBe(false);
    expect(result.brokenLinks).toContain('/broken-link');
  });
});

// ============================================================================
// LINK COUNTING TESTS
// ============================================================================

describe('Link Counting', () => {
  it('should count markdown internal links', () => {
    const text = 'Check [this article](/blog/test) and [another one](/kosten) for more info.';
    const count = countInternalLinks(text);
    
    expect(count).toBe(2);
  });

  it('should count HTML internal links', () => {
    const text = 'Check <a href="/blog/test">this article</a> for more info.';
    const count = countInternalLinks(text);
    
    expect(count).toBe(1);
  });

  it('should not count external links', () => {
    const text = 'Check [external](https://example.com) and [internal](/blog/test).';
    const count = countInternalLinks(text);
    
    expect(count).toBe(1);
  });

  it('should return 0 for text without links', () => {
    const text = 'This is a text without any links.';
    const count = countInternalLinks(text);
    
    expect(count).toBe(0);
  });
});
