/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile for older iOS Safari (iPhone 7+ / iOS 15)
  experimental: {
    legacyBrowsers: false,
  },
};

export default nextConfig;
