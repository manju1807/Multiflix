/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sup-proxy.zephex0-f6c.workers.dev",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      }
    ]
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
};

export default nextConfig;