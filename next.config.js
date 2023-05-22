/** @type {import('next').NextConfig} */
const nextConfig = {
  session: {
    jwt: true,
    minAge: 30 * 24 * 60 * 60
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
