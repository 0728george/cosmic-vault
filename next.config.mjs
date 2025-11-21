// next.config.mjs
import { withOpenNext } from '@opennextjs/cloudflare/package';

 /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,   // Required for Cloudflare
  },
  // Add any other config you already have here
};

export default withOpenNext(nextConfig);
