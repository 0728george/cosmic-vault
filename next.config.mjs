/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDocumentPreloading: true,
  },
  images: {
    unoptimized: true, // we serve PDFs and static assets ourselves
  },
};

export default nextConfig;
