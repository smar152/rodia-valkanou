module.exports = {
  trailingSlash: true,

  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': {
        page: '/contact',
        query: { title: 'Ροδιά Βαλκάνου | Επικοινωνία' },
      },
    };
  },
};
