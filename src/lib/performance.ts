/**
 * Performance Utilities für Core Web Vitals Optimierung
 * 
 * Enthält Hilfsfunktionen für:
 * - Kritische Ressourcen-Preloading
 * - Image Optimization Hints
 * - Lazy Loading Strategien
 * - Performance Monitoring
 */

// ============================================================================
// CRITICAL RESOURCE PRELOADING
// ============================================================================

/**
 * Generiert Preload-Links für kritische Ressourcen
 * Kann in Layout oder Page-Head verwendet werden
 */
export function getCriticalPreloads(): Array<{
  rel: 'preload' | 'preconnect' | 'dns-prefetch';
  href: string;
  as?: string;
  type?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
}> {
  return [
    // Preconnect zu Google Fonts (wird von next/font verwendet)
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
  ];
}

// ============================================================================
// IMAGE OPTIMIZATION
// ============================================================================

/**
 * Berechnet optimale Bildgrößen basierend auf Container-Breite
 */
export function getOptimalImageSizes(containerWidth: number): string {
  // Responsive sizes für verschiedene Breakpoints
  if (containerWidth <= 640) {
    return '100vw';
  }
  if (containerWidth <= 768) {
    return '(max-width: 768px) 100vw, 50vw';
  }
  if (containerWidth <= 1024) {
    return '(max-width: 1024px) 50vw, 33vw';
  }
  return '(max-width: 1280px) 33vw, 25vw';
}

/**
 * Generiert blur placeholder für Bilder (verhindert Layout Shift)
 */
export function getBlurPlaceholder(width: number, height: number): string {
  // Simple SVG blur placeholder
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <filter id="b" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="20"/>
      </filter>
      <rect width="100%" height="100%" fill="#1e3a5f" filter="url(#b)"/>
    </svg>
  `;
  
  const base64 = typeof window === 'undefined' 
    ? Buffer.from(svg).toString('base64')
    : btoa(svg);
    
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Standard-Konfiguration für next/image
 */
export const imageDefaults = {
  // Lazy loading by default
  loading: 'lazy' as const,
  // Blur placeholder aktivieren
  placeholder: 'blur' as const,
  // Qualität für Detektei-Bilder (Balance zwischen Qualität und Größe)
  quality: 85,
} as const;

/**
 * Konfiguration für Hero-Bilder (über dem Fold)
 */
export const heroImageDefaults = {
  // Kein lazy loading für Above-the-Fold
  loading: 'eager' as const,
  priority: true,
  placeholder: 'blur' as const,
  quality: 90,
} as const;

// ============================================================================
// LAZY LOADING STRATEGIES
// ============================================================================

/**
 * Intersection Observer-basiertes Lazy Loading
 */
export function createLazyLoadObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '100px', // 100px vor Sichtbarkeit laden
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, defaultOptions);
}

// ============================================================================
// PERFORMANCE METRICS
// ============================================================================

/**
 * Web Vitals Typ-Definitionen
 */
export interface WebVitalsMetric {
  id: string;
  name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
}

/**
 * Schwellenwerte für Core Web Vitals
 */
export const WEB_VITALS_THRESHOLDS = {
  // Largest Contentful Paint (ms)
  LCP: { good: 2500, poor: 4000 },
  // First Input Delay (ms)
  FID: { good: 100, poor: 300 },
  // Cumulative Layout Shift (unitless)
  CLS: { good: 0.1, poor: 0.25 },
  // Interaction to Next Paint (ms)
  INP: { good: 200, poor: 500 },
  // First Contentful Paint (ms)
  FCP: { good: 1800, poor: 3000 },
  // Time to First Byte (ms)
  TTFB: { good: 800, poor: 1800 },
} as const;

/**
 * Bewertet einen Web Vitals Wert
 */
export function rateWebVital(
  name: keyof typeof WEB_VITALS_THRESHOLDS,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = WEB_VITALS_THRESHOLDS[name];
  
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Formatiert Web Vitals für Logging
 */
export function formatWebVitalForLog(metric: WebVitalsMetric): string {
  const value = metric.name === 'CLS' 
    ? metric.value.toFixed(3)
    : `${Math.round(metric.value)}ms`;
    
  const icon = metric.rating === 'good' ? '✅' : 
               metric.rating === 'needs-improvement' ? '⚠️' : '❌';
               
  return `${icon} ${metric.name}: ${value} (${metric.rating})`;
}

// ============================================================================
// RESOURCE HINTS
// ============================================================================

/**
 * Generiert Resource Hints für wichtige Seiten
 */
export function getResourceHints(currentPath: string): Array<{
  rel: 'prefetch' | 'prerender';
  href: string;
}> {
  const hints: Array<{ rel: 'prefetch' | 'prerender'; href: string }> = [];
  
  // Prefetch für wahrscheinliche nächste Seiten basierend auf aktuellem Pfad
  if (currentPath === '/') {
    // Von Homepage: Wahrscheinlich Kontakt oder Einsatzgebiete
    hints.push({ rel: 'prefetch', href: '/kontakt' });
    hints.push({ rel: 'prefetch', href: '/einsatzgebiete' });
  }
  
  if (currentPath.startsWith('/blog')) {
    // Von Blog: Wahrscheinlich Kontakt
    hints.push({ rel: 'prefetch', href: '/kontakt' });
  }
  
  if (currentPath.startsWith('/einsatzgebiete')) {
    // Von Einsatzgebiet: Wahrscheinlich Kontakt
    hints.push({ rel: 'prefetch', href: '/kontakt' });
  }
  
  return hints;
}

// ============================================================================
// CACHING UTILITIES
// ============================================================================

/**
 * Generiert Cache-Control Header Wert basierend auf Content-Typ
 */
export function getCacheControlHeader(
  contentType: 'static' | 'page' | 'api' | 'sitemap'
): string {
  switch (contentType) {
    case 'static':
      // Statische Assets (Bilder, Fonts): 1 Jahr
      return 'public, max-age=31536000, immutable';
    case 'page':
      // Seiten: 1 Tag mit Stale-While-Revalidate
      return 'public, max-age=86400, stale-while-revalidate=604800';
    case 'api':
      // API Responses: Kurzes Caching
      return 'public, max-age=60, stale-while-revalidate=600';
    case 'sitemap':
      // Sitemap: 1 Stunde mit SWR
      return 'public, max-age=3600, stale-while-revalidate=86400';
    default:
      return 'public, max-age=3600';
  }
}

// ============================================================================
// BUNDLE SIZE HELPERS
// ============================================================================

/**
 * Icons die lazy geladen werden können (nicht kritisch für LCP)
 */
export const LAZY_LOAD_ICONS = [
  'Calendar',
  'Clock',
  'Tag',
  'ArrowRight',
  'ArrowLeft',
  'ExternalLink',
  'Download',
  'Share',
] as const;

/**
 * Prüft ob ein Icon lazy geladen werden sollte
 */
export function shouldLazyLoadIcon(iconName: string): boolean {
  return LAZY_LOAD_ICONS.includes(iconName as typeof LAZY_LOAD_ICONS[number]);
}
