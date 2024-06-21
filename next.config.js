const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/how-long-has-it-been' : '',
  assetPrefix: isProd ? '/how-long-has-it-been/' : '',
  // Other Next.js configuration options can go here
};

module.exports = nextConfig;
