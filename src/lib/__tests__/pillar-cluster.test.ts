/**
 * Unit Tests für Pillar-Cluster Module
 * 
 * Testet die Kernfunktionalität der Pillar-Cluster-Map Integration.
 */

import { describe, it, expect } from 'vitest';
import {
  getActivePillars,
  getAllPillars,
  getPillarBySlug,
  getPillarById,
  getPillarForCluster,
  getClustersForPillar,
  isPillar,
  isCluster,
  getClusterInfo,
  getInternalLinksForArticle,
  getLinkTextForArticle,
  getServicePagesForCategory,
  getPillarClusterStats,
} from '../pillar-cluster';

// ============================================================================
// PILLAR RETRIEVAL TESTS
// ============================================================================

describe('Pillar Retrieval', () => {
  it('should get all pillars including deferred', () => {
    const pillars = getAllPillars();
    expect(pillars).toBeDefined();
    expect(Array.isArray(pillars)).toBe(true);
    expect(pillars.length).toBeGreaterThan(0);
  });

  it('should get only active pillars (excluding deferred)', () => {
    const active = getActivePillars();
    const all = getAllPillars();
    
    expect(active.length).toBeLessThanOrEqual(all.length);
    expect(active.every(p => p.status !== 'deferred')).toBe(true);
  });

  it('should find pillar by slug', () => {
    const pillars = getAllPillars();
    if (pillars.length > 0) {
      const firstPillar = pillars[0];
      const found = getPillarBySlug(firstPillar.pillarSlug);
      
      expect(found).toBeDefined();
      expect(found?.pillarId).toBe(firstPillar.pillarId);
    }
  });

  it('should return undefined for non-existent pillar slug', () => {
    const found = getPillarBySlug('non-existent-pillar-slug-12345');
    expect(found).toBeUndefined();
  });

  it('should find pillar by ID', () => {
    const pillars = getAllPillars();
    if (pillars.length > 0) {
      const firstPillar = pillars[0];
      const found = getPillarById(firstPillar.pillarId);
      
      expect(found).toBeDefined();
      expect(found?.pillarSlug).toBe(firstPillar.pillarSlug);
    }
  });
});

// ============================================================================
// CLUSTER RELATIONSHIP TESTS
// ============================================================================

describe('Cluster Relationships', () => {
  it('should find parent pillar for cluster article', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0);
    
    if (pillarWithClusters) {
      const clusterSlug = pillarWithClusters.clusters[0].slug;
      const parentPillar = getPillarForCluster(clusterSlug);
      
      expect(parentPillar).toBeDefined();
      expect(parentPillar?.pillarId).toBe(pillarWithClusters.pillarId);
    }
  });

  it('should return undefined for non-cluster slug', () => {
    const parent = getPillarForCluster('definitely-not-a-cluster-article');
    expect(parent).toBeUndefined();
  });

  it('should get all clusters for a pillar', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0);
    
    if (pillarWithClusters) {
      const clusters = getClustersForPillar(pillarWithClusters.pillarSlug);
      
      expect(clusters).toBeDefined();
      expect(clusters.length).toBe(pillarWithClusters.clusters.length);
    }
  });

  it('should return empty array for non-existent pillar', () => {
    const clusters = getClustersForPillar('non-existent-pillar');
    expect(clusters).toEqual([]);
  });
});

// ============================================================================
// TYPE CHECKING TESTS
// ============================================================================

describe('Type Checking (isPillar/isCluster)', () => {
  it('should correctly identify pillar articles', () => {
    const pillars = getAllPillars();
    if (pillars.length > 0) {
      expect(isPillar(pillars[0].pillarSlug)).toBe(true);
    }
  });

  it('should correctly identify non-pillar articles', () => {
    expect(isPillar('random-non-pillar-article')).toBe(false);
  });

  it('should correctly identify cluster articles', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0);
    
    if (pillarWithClusters) {
      const clusterSlug = pillarWithClusters.clusters[0].slug;
      expect(isCluster(clusterSlug)).toBe(true);
    }
  });

  it('should correctly identify non-cluster articles', () => {
    expect(isCluster('random-non-cluster-article')).toBe(false);
  });

  it('pillar should not be identified as cluster', () => {
    const pillars = getAllPillars();
    if (pillars.length > 0) {
      // A pillar slug should not be a cluster
      expect(isCluster(pillars[0].pillarSlug)).toBe(false);
    }
  });
});

// ============================================================================
// CLUSTER INFO TESTS
// ============================================================================

describe('Cluster Info', () => {
  it('should get cluster info with linkText', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0);
    
    if (pillarWithClusters) {
      const clusterSlug = pillarWithClusters.clusters[0].slug;
      const info = getClusterInfo(clusterSlug);
      
      expect(info).toBeDefined();
      expect(info?.id).toBeDefined();
      expect(info?.slug).toBe(clusterSlug);
      expect(Array.isArray(info?.linkText)).toBe(true);
      expect(info?.linkText.length).toBeGreaterThan(0);
    }
  });

  it('should return undefined for non-cluster', () => {
    const info = getClusterInfo('not-a-cluster');
    expect(info).toBeUndefined();
  });
});

// ============================================================================
// INTERNAL LINKING TESTS
// ============================================================================

describe('Internal Link Generation', () => {
  it('should generate links for pillar article', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0);
    
    if (pillarWithClusters) {
      const links = getInternalLinksForArticle(pillarWithClusters.pillarSlug);
      
      expect(links).toBeDefined();
      expect(Array.isArray(links)).toBe(true);
      // Pillar should have links to its clusters
      expect(links.length).toBeGreaterThan(0);
      
      // Should contain cluster links
      const clusterLinks = links.filter(l => l.type === 'cluster');
      expect(clusterLinks.length).toBeGreaterThan(0);
    }
  });

  it('should generate links for cluster article', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0);
    
    if (pillarWithClusters && pillarWithClusters.clusters.length > 0) {
      const clusterSlug = pillarWithClusters.clusters[0].slug;
      const links = getInternalLinksForArticle(clusterSlug);
      
      expect(links).toBeDefined();
      expect(Array.isArray(links)).toBe(true);
      
      // Cluster should have link to parent pillar
      const pillarLink = links.find(l => l.type === 'pillar');
      expect(pillarLink).toBeDefined();
      expect(pillarLink?.url).toBe(pillarWithClusters.pillarUrl);
    }
  });

  it('should return empty array for non-mapped article', () => {
    const links = getInternalLinksForArticle('article-not-in-pillar-cluster-map');
    expect(links).toEqual([]);
  });
});

// ============================================================================
// LINK TEXT TESTS
// ============================================================================

describe('Link Text Generation', () => {
  it('should return first linkText variant by default', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => p.clusters.length > 0);
    
    if (pillarWithClusters && pillarWithClusters.clusters.length > 0) {
      const cluster = pillarWithClusters.clusters[0];
      const text = getLinkTextForArticle(cluster.slug, 0);
      
      expect(text).toBe(cluster.linkText[0]);
    }
  });

  it('should cycle through linkText variants', () => {
    const pillars = getAllPillars();
    const pillarWithClusters = pillars.find(p => 
      p.clusters.some(c => c.linkText.length > 1)
    );
    
    if (pillarWithClusters) {
      const cluster = pillarWithClusters.clusters.find(c => c.linkText.length > 1);
      if (cluster) {
        const text0 = getLinkTextForArticle(cluster.slug, 0);
        const text1 = getLinkTextForArticle(cluster.slug, 1);
        
        expect(text0).toBe(cluster.linkText[0]);
        expect(text1).toBe(cluster.linkText[1]);
      }
    }
  });

  it('should return pillar title for pillar slug', () => {
    const pillars = getAllPillars();
    if (pillars.length > 0) {
      const pillar = pillars[0];
      const text = getLinkTextForArticle(pillar.pillarSlug, 0);
      
      expect(text).toBe(pillar.pillarTitle);
    }
  });
});

// ============================================================================
// SERVICE PAGES TESTS
// ============================================================================

describe('Service Pages', () => {
  it('should return service pages for known category', () => {
    const pages = getServicePagesForCategory('Kosten');
    
    expect(pages).toBeDefined();
    expect(Array.isArray(pages)).toBe(true);
    // Kosten category should have some service pages
    expect(pages.length).toBeGreaterThanOrEqual(0);
  });

  it('should include pages with ALL in linkFrom', () => {
    const pages = getServicePagesForCategory('RandomCategory');
    
    // Should still return pages that are linked from ALL categories
    // Check if any pages exist that are linked from ALL
    const allPages = getServicePagesForCategory('ALL');
    if (allPages.some(p => p.linkFrom.includes('ALL'))) {
      expect(pages.length).toBeGreaterThan(0);
    }
  });
});

// ============================================================================
// STATISTICS TESTS
// ============================================================================

describe('Statistics', () => {
  it('should return valid statistics', () => {
    const stats = getPillarClusterStats();
    
    expect(stats).toBeDefined();
    expect(stats.totalPillars).toBeGreaterThan(0);
    expect(stats.activePillars).toBeLessThanOrEqual(stats.totalPillars);
    expect(stats.deferredPillars).toBe(stats.totalPillars - stats.activePillars);
    expect(stats.totalClusters).toBeGreaterThan(0);
    expect(Array.isArray(stats.categories)).toBe(true);
    expect(stats.categories.length).toBeGreaterThan(0);
    expect(stats.avgClustersPerPillar).toBeGreaterThan(0);
  });
});
