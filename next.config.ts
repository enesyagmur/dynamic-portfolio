import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      // başka domainler varsa onları da ekleyebilirsin
    ],
  },
  /* config options here */
};

export default nextConfig;
