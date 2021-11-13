const webpack = require('webpack');
const path = require('path');

const notice = `
See https://github.com/Codecademy/konamimojisplosion for documentation.
MIT licensed.
`.trim();

module.exports = {
  entry: './src/global.ts',
  mode: 'production',
  output: {
    filename: 'global.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new webpack.BannerPlugin(notice)],
};
