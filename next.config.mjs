/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"w7.pngwing.com",
                hostname:"render.fineartamerica.com"
            },
            
        ]
    }
};

export default nextConfig;
