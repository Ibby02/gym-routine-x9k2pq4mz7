import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "export",
   basePath: "/gym-routine",
   images: {unoptimized: true},
   trailingSlash: true,
};

export default nextConfig;
