/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'w5xprg2nkhvnpoxb.public.blob.vercel-storage.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
