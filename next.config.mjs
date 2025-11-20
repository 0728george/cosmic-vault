/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDocumentPreloading: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
