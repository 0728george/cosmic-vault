// next.config.mjs
import { withOpenNext } from '@opennextjs/cloudflare';

const nextConfig = {
  images: {
    unoptimized: true,  // Required on Cloudflare
  },
  // Keep any other config you have (e.g., experimental, rewrites, etc.)
};

export default withOpenNext(nextConfig);
