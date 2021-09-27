module.exports = () => ({
  ident: 'postcss',
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    'autoprefixer': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-media-queries': true,
      },
    },
  },
});

// https://preset-env.cssdb.org/features
