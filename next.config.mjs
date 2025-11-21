// Remove the old withNextOnPages wrapper
import { withOpenNext } from '@opennextjs/cloudflare';

const nextConfig = {
  // your existing config (images.unoptimized, etc.)
};

export default withOpenNext(nextConfig);
