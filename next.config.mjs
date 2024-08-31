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
          },
          {
            protocol: 'https',
            hostname: '*images.mobileshop.eu',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '',
            pathname: '/**',
          }
          
        ],
      }

};

export default nextConfig;
