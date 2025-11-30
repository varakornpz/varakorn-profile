/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint : {
        ignoreDuringBuilds : true
    } ,
    images : {
        remotePatterns : [
            {
                protocol : "https" ,
                hostname : "media.thairath.co.th"
            }
        ]
    }
};

export default nextConfig;
