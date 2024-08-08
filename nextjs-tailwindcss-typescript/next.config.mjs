/** @type {import('next').NextConfig} */
const nextConfig = {
  // Colocar a imagem da API no projeto
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
