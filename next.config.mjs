/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGithubActions && {
    basePath: '/Demo-Finance',
    assetPrefix: '/Demo-Finance/',
  }),
};

export default nextConfig;
