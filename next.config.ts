import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Font sorunları için workaround
    turbo: {
      resolveAlias: {
        '@vercel/turbopack-next/internal/font/google/font': require.resolve('next/dist/compiled/@vercel/og/index.edge')
      }
    }
  }
};

export default nextConfig;
