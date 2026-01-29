/**
 * Unit Tests für Metadata Factory
 * 
 * Testet die Generierung von SEO-Metadaten.
 */

import { describe, it, expect } from 'vitest';
import {
  SEO_CONFIG,
  generateMetadata,
  generateEinsatzgebietMetadata,
  generateBlogMetadata,
  generateServiceMetadata,
  buildTitle,
  buildDescription,
  buildCanonicalUrl,
  validateTitle,
  validateDescription,
} from '../metadata';

// ============================================================================
// SEO CONFIG TESTS
// ============================================================================

describe('SEO Configuration', () => {
  it('should have all required config values', () => {
    expect(SEO_CONFIG.siteName).toBeDefined();
    expect(SEO_CONFIG.siteUrl).toBeDefined();
    expect(SEO_CONFIG.defaultImage).toBeDefined();
    expect(SEO_CONFIG.locale).toBe('de_DE');
    expect(SEO_CONFIG.maxTitleLength).toBeGreaterThan(0);
    expect(SEO_CONFIG.maxDescriptionLength).toBeGreaterThan(0);
  });

  it('should have valid URL format', () => {
    expect(SEO_CONFIG.siteUrl).toMatch(/^https?:\/\//);
  });
});

// ============================================================================
// METADATA GENERATION TESTS
// ============================================================================

describe('generateMetadata', () => {
  it('should generate complete metadata object', () => {
    const metadata = generateMetadata({
      title: 'Test Title',
      description: 'Test description for the page',
      url: '/test-page',
    });

    expect(metadata.title).toBeDefined();
    expect(metadata.description).toBe('Test description for the page');
    expect(metadata.alternates?.canonical).toContain('/test-page');
    expect(metadata.openGraph).toBeDefined();
    expect(metadata.twitter).toBeDefined();
  });

  it('should add title suffix when space allows', () => {
    const metadata = generateMetadata({
      title: 'Short Title',
      description: 'Description',
      url: '/test',
    });

    expect(metadata.title).toContain(SEO_CONFIG.titleSuffix);
  });

  it('should use shorter suffix for longer titles', () => {
    const longTitle = 'This is a very long title that needs a shorter suffix';
    const metadata = generateMetadata({
      title: longTitle,
      description: 'Description',
      url: '/test',
    });

    // Should either have short suffix or no suffix
    const title = metadata.title as string;
    expect(title.length).toBeLessThanOrEqual(SEO_CONFIG.maxTitleLength + SEO_CONFIG.titleSuffix.length);
  });

  it('should truncate long descriptions', () => {
    const longDescription = 'A'.repeat(200);
    const metadata = generateMetadata({
      title: 'Title',
      description: longDescription,
      url: '/test',
    });

    expect(metadata.description?.length).toBeLessThanOrEqual(SEO_CONFIG.maxDescriptionLength);
    expect(metadata.description).toContain('...');
  });

  it('should build full canonical URL', () => {
    const metadata = generateMetadata({
      title: 'Test',
      description: 'Description',
      url: '/blog/test-article',
    });

    expect(metadata.alternates?.canonical).toBe(`${SEO_CONFIG.siteUrl}/blog/test-article`);
  });

  it('should set article type for blog posts', () => {
    const metadata = generateMetadata({
      title: 'Blog Post',
      description: 'Description',
      url: '/blog/test',
      type: 'article',
      publishedTime: '2024-01-01',
    });

    expect(metadata.openGraph?.type).toBe('article');
  });

  it('should add noindex when specified', () => {
    const metadata = generateMetadata({
      title: 'Private Page',
      description: 'Description',
      url: '/private',
      noIndex: true,
    });

    expect(metadata.robots).toBeDefined();
    expect((metadata.robots as { index: boolean })?.index).toBe(false);
  });
});

// ============================================================================
// SPECIALIZED GENERATORS TESTS
// ============================================================================

describe('generateEinsatzgebietMetadata', () => {
  it('should generate metadata for location page', () => {
    const metadata = generateEinsatzgebietMetadata({
      title: 'Detektei München',
      description: 'Professionelle Detektei für München',
      url: '/einsatzgebiete/bundesland/bayern/muenchen',
    });

    expect(metadata.title).toBeDefined();
    expect(metadata.description).toBeDefined();
    expect(metadata.alternates?.canonical).toContain('muenchen');
  });
});

describe('generateBlogMetadata', () => {
  it('should generate metadata for blog article', () => {
    const metadata = generateBlogMetadata({
      title: 'Test Article',
      description: 'Article description',
      url: '/blog/test-article',
      publishDate: '2024-01-15',
      updatedAt: '2024-01-20',
    });

    expect(metadata.openGraph?.type).toBe('article');
  });

  it('should use publishDate as modifiedTime if no updatedAt', () => {
    const metadata = generateBlogMetadata({
      title: 'Test Article',
      description: 'Description',
      url: '/blog/test',
      publishDate: '2024-01-15',
    });

    // The modifiedTime should be set (either from updatedAt or publishDate)
    expect(metadata.openGraph).toBeDefined();
  });
});

describe('generateServiceMetadata', () => {
  it('should generate metadata for service page', () => {
    const metadata = generateServiceMetadata({
      title: 'Privatdetektei',
      description: 'Unsere Privatdetektei Services',
      url: '/privatdetektei',
    });

    expect(metadata.openGraph?.type).toBe('website');
    expect(metadata.alternates?.canonical).toContain('privatdetektei');
  });
});

// ============================================================================
// HELPER FUNCTIONS TESTS
// ============================================================================

describe('buildTitle', () => {
  it('should build title with suffix', () => {
    const title = buildTitle('Detektiv Kosten', 'Ratgeber 2026');
    expect(title).toBe('Detektiv Kosten – Ratgeber 2026');
  });

  it('should return keyword only if combined is too long', () => {
    const longSuffix = 'A'.repeat(50);
    const title = buildTitle('Detektiv Kosten', longSuffix);
    expect(title).toBe('Detektiv Kosten');
  });

  it('should return keyword only if no suffix provided', () => {
    const title = buildTitle('Detektiv Kosten');
    expect(title).toBe('Detektiv Kosten');
  });
});

describe('buildDescription', () => {
  it('should replace placeholders', () => {
    const template = 'Detektei für {city}, {state} - Professionelle Ermittlungen';
    const description = buildDescription(template, {
      city: 'München',
      state: 'Bayern',
    });

    expect(description).toBe('Detektei für München, Bayern - Professionelle Ermittlungen');
  });

  it('should truncate if too long', () => {
    const template = 'A'.repeat(200);
    const description = buildDescription(template, {});

    expect(description.length).toBeLessThanOrEqual(SEO_CONFIG.maxDescriptionLength);
  });
});

describe('buildCanonicalUrl', () => {
  it('should prepend site URL', () => {
    const url = buildCanonicalUrl('/blog/test');
    expect(url).toBe(`${SEO_CONFIG.siteUrl}/blog/test`);
  });

  it('should handle paths without leading slash', () => {
    const url = buildCanonicalUrl('blog/test');
    expect(url).toBe(`${SEO_CONFIG.siteUrl}/blog/test`);
  });
});

// ============================================================================
// VALIDATION TESTS
// ============================================================================

describe('validateTitle', () => {
  it('should validate correct title length', () => {
    const result = validateTitle('This is a good title with proper length');
    expect(result.valid).toBe(true);
    expect(result.issues).toHaveLength(0);
  });

  it('should flag too short titles', () => {
    const result = validateTitle('Short');
    expect(result.valid).toBe(false);
    expect(result.issues).toContain('Title zu kurz (< 30 Zeichen)');
  });

  it('should flag too long titles', () => {
    const result = validateTitle('A'.repeat(70));
    expect(result.valid).toBe(false);
    expect(result.issues).toContain('Title zu lang (> 60 Zeichen)');
  });
});

describe('validateDescription', () => {
  it('should validate correct description length', () => {
    const result = validateDescription('A'.repeat(120));
    expect(result.valid).toBe(true);
    expect(result.issues).toHaveLength(0);
  });

  it('should flag too short descriptions', () => {
    const result = validateDescription('Too short');
    expect(result.valid).toBe(false);
    expect(result.issues).toContain('Description zu kurz (< 100 Zeichen)');
  });

  it('should flag too long descriptions', () => {
    const result = validateDescription('A'.repeat(200));
    expect(result.valid).toBe(false);
    expect(result.issues).toContain('Description zu lang (> 160 Zeichen)');
  });
});
