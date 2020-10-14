export default {
  ignoredByWatcher: ['**/*.ts'],
  verbose: true,
  typescript: {
    rewritePaths: {
      'src/': 'dist/'
    },
  },
};
