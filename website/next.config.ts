const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/DANIEL101SHI.GITHUB.IO/' : '',
  basePath: isProd ? '/DANIEL101SHI.GITHUB.IO' : '',
  output: 'export'
};

export default nextConfig;