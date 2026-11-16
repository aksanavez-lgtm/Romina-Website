import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/einzeltherapie-moedling-wien", destination: "/therapie/einzeltherapie", permanent: true },
      { source: "/paartherapie-moedling-wien", destination: "/therapie/paartherapie", permanent: true },
      { source: "/familientherapie-moedling-wien", destination: "/therapie/familientherapie", permanent: true },
      { source: "/traumapsychotherapie-moedling-wien", destination: "/therapie/traumapsychotherapie", permanent: true },
      { source: "/psychotherapie-mit-kuenstlerischen-und-erlebnisorientierten-elementen", destination: "/therapie/kuenstlerische-erlebnisorientierte-psychotherapie", permanent: true },
      { source: "/tiergestuetzte-psychotherapie-mit-alpakas", destination: "/therapie/tiergestuetzte-psychotherapie", permanent: true },
      { source: "/ueber-mich", destination: "/#ueber-mich", permanent: true },
      { source: "/methode-schwerpunkte", destination: "/#therapie", permanent: true },
    ];
  },
};

export default nextConfig;
