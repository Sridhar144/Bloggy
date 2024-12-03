/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export generation
    images: {
      unoptimized: true, // Ensures images are compatible with static export
    },
  };
export default nextConfig;
