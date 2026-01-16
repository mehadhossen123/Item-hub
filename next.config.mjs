/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. React Compiler activation
  experimental: {
    reactCompiler: true,
  },

  // 2. Image Optimization for remote sources
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.flaticon.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
