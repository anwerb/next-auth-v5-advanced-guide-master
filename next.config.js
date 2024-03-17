/** @type {import('next').NextConfig} */
const nextConfig = {
  
}

module.exports = {
    images: {
      formats: ["image/avif", "image/webp"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "",
          pathname: "/image/upload/**",
        },
      ],
    },
  };