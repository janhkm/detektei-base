import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  
  // ============================================================================
  // IMAGE OPTIMIZATION
  // ============================================================================
  images: {
    formats: ["image/avif", "image/webp"],
    // Optimale Device-Größen für responsive Bilder
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimiere Layout Shift durch Aspect Ratio
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
  },

  // ============================================================================
  // PERFORMANCE OPTIMIZATIONS
  // ============================================================================
  
  // Kompression aktivieren
  compress: true,
  
  // Strict Mode für bessere React-Performance
  reactStrictMode: true,
  
  // Powered-by Header entfernen (Security + minimal kleinere Response)
  poweredByHeader: false,
  
  // Trailing Slashes konsistent (SEO + Caching)
  trailingSlash: false,
  
  // ============================================================================
  // BUNDLE OPTIMIZATION
  // ============================================================================
  
  // Experimentelle Features für bessere Performance
  experimental: {
    // Optimized Package Imports für besseres Tree Shaking
    optimizePackageImports: ['lucide-react', 'clsx'],
  },
  
  // ============================================================================
  // CACHING & HEADERS
  // ============================================================================
  
  async headers() {
    return [
      // Statische Assets lange cachen
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // SVG Favicon
      {
        source: '/favicon.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      // Preconnect Hints für externe Ressourcen
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
