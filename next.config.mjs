// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,  // Required on Cloudflare
  },
  // Add any other config you need (e.g., trailingSlash: true)
};

export default nextConfig;
