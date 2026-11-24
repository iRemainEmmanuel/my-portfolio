/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => ({
  distDir: phase === 'phase-development-server' ? '.next-dev' : '.next',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
});

export default nextConfig;
