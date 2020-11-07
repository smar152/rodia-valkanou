module.exports = {
  trailingSlash: true,
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/about": { page: "/[page]" },
      "/symbouleytiki": { page: "/[page]" },
      "/organwsi": { page: "/[page]" },
      "/oikonomika": { page: "/[page]" },
      "/bespoke": { page: "/[page]" },
      "/synergates": { page: "/[page]" },
      "/contact": { page: "/[page]" },
    };
  },
};
