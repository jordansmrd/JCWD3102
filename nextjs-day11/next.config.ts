/** @format */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.tokopedia.net",
        pathname: "/img/cache/200-square/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
