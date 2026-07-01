import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.brandfetch.io" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/case-studies/paygos-prototype",
        destination: "/case-studies/paygos-demo",
        permanent: true,
      },
      {
        source: "/case-studies/birdseye",
        destination: "/case-studies/bonus-bowls",
        permanent: true,
      },
      {
        source: "/case-studies/design-archive",
        destination: "/case-studies/paygos-corporate-site",
        permanent: true,
      },
      {
        source: "/case-studies/wealthie",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
