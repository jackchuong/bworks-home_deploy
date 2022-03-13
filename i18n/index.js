// const defaultLangsFromHost = {
//   vi: 'vi',
//   default: 'en', // localhost
// };

// function getDomain(host) {
//   const domain = host.split('.');
//   return domain[domain.length - 1];
// }

module.exports = {
  allLanguages: ['en', 'vi'],
  defaultLanguage: 'en',
  currentPagesDir: 'src/pages_',
  finalPagesDir: 'src/pages',
  localesPath: '.locales',
  pages: {
    '*': ['common'],
  },
};
