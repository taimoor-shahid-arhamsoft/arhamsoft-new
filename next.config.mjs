/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // Handle media files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
        },
      },
    });

    // Ensure that other rules are not overridden
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "d2g5gf76vk4es3.cloudfront.net",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Redirecting broken pages to required pages
      { source: "/product-development", destination: "/products", permanent: true },
      { source: "/ui-ux", destination: "/design-graphics", permanent: true },
      { source: "/application-re-engineering", destination: "/data-engineering", permanent: true },
      { source: "/customers", destination: "/", permanent: true },
      { source: "/seo", destination: "/internet-marketing", permanent: true },
      { source: "/blog/exploring-offshore", destination: "/hire-dedicated-resource", permanent: true },
      { source: "/company", destination: "/about-us", permanent: true },
      { source: "/generative-ai", destination: "/ai-and-machine-learning", permanent: true },
      { source: "/dedicated-team", destination: "/hire-dedicated-resource", permanent: true },
      { source: "/blog/mobile-app-Development", destination: "/iphoneipad-apps", permanent: true },
      { source: "/poc-development", destination: "/ai-poc-mvp", permanent: true },
      { source: "/application-development", destination: "/application-modernization", permanent: true },
      { source: "/quality-assurance", destination: "/qa-and-testing", permanent: true },
      { source: "/discovery-workshop", destination: "/", permanent: true },
      { source: "/blog/comprehensive-guide", destination: "/", permanent: true },
      { source: "/digital-marketing-branding", destination: "/digital-marketing", permanent: true },
      { source: "/blogs", destination: "/", permanent: true },
      { source: "/product-strategy", destination: "/products", permanent: true },
      { source: "/blog/website-development", destination: "/web-development", permanent: true },
      { source: "/software-audit", destination: "/", permanent: true },
      { source: "/blog/digital-marketing-detail", destination: "/", permanent: true },
      { source: "/market-research", destination: "/", permanent: true },
      { source: "/podcasts", destination: "/", permanent: true },
      { source: "/mlops", destination: "/ml-ops", permanent: true },
      { source: "/fixed-price-projects", destination: "/fixed-price", permanent: true },
      { source: "/ai-workshop", destination: "/ai-and-machine-learning", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/graphic-designing.html", destination: "/web-graphics-designer", permanent: true },
      { source: "/blog/offshore-software-development-strategies-in-2024", destination: "/", permanent: true },
      { source: "/about-us.html", destination: "/about-us", permanent: true },
      { source: "/web-development.html", destination: "/web-development", permanent: true },
      { source: "/desktop-app-development.html", destination: "/desktop-development", permanent: true },
      { source: "/blog/ai-workshop", destination: "/ai-and-machine-learning", permanent: true },
      { source: "/blog/tag/hire-dot-net-developers", destination: "/dotnet-developers", permanent: true },
      { source: "/blog/tag/dot-net-developers", destination: "/dotnet-developers", permanent: true },
      { source: "/blog/tag/hiring-dot-net-developers", destination: "/dotnet-developers", permanent: true },
      { source: "/blog/tag/mobile-app-development-services", destination: "/iphoneipad-apps", permanent: true },
      { source: "/blog/tag/online-marketing-agency", destination: "/", permanent: true },
      { source: "/viagra/buy-viagra-cialis", destination: "/", permanent: true },
      { source: "/blog/tag/software-development-process", destination: "/", permanent: true },
      { source: "/blog/offshore-", destination: "/hire-dedicated-resource", permanent: true },
      { source: "/blog/tag/mobile-app-development", destination: "/iphoneipad-apps", permanent: true },
      { source: "/viagra/where-do-you-buy-viagra", destination: "/", permanent: true },
      { source: "/mobile-app-development.html", destination: "/iphoneipad-apps", permanent: true },
      { source: "/viagra/sildenafil-online-pharmacy", destination: "/", permanent: true },
      { source: "/blog/what-trends-a-best-internet-marketing-company-should-follow", destination: "/", permanent: true },
      { source: "/WhitePaper.pdf", destination: "/", permanent: true },
      { source: "/viagra/buy-viagra-online-cheap", destination: "/", permanent: true },
      { source: "/internet-marketing.html", destination: "/internet-marketing", permanent: true },
      { source: "/blog/what-trends-a-best-internet-marketing-company-should-follow", destination: "/", permanent: true },
      { source: "/offshore-development-center", destination: "/hire-dedicated-resource", permanent: true },
      { source: "/market-research", destination: "/", permanent: true },
      { source: "/machine-learning", destination: "/ai-and-machine-learning", permanent: true },
      { source: "/sem", destination: "/internet-marketing", permanent: true },
      { source: "/offshore-development-center", destination: "/hire-dedicated-resource", permanent: true },
      { source: "/application-development", destination: "/iphoneipad-apps", permanent: true },
      { source: "/poc-development", destination: "/ai-poc-mvp", permanent: true },
      { source: "/seo-services-for-small-business.html", destination: "/internet-marketing", permanent: true },
      { source: "/blog/custom-web-detail", destination: "/custom-software-development", permanent: true },
    ];
  },
};

export default nextConfig;
