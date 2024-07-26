/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*.digikala.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: '*.digikala.com',
            port: '',
            pathname: '/**',
          }
        ],
      }

};

export default nextConfig;
