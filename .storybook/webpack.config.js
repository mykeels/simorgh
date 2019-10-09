const webpack = require('webpack');
const { webpackDirAlias } = require('../dirAlias');

module.exports = async ({ config, mode }) => {
  config.resolve.extensions = ['.js', '.jsx', '.json'];
  config.resolve.alias = webpackDirAlias;

  config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(
      /(.*)logger.node(\.*)/,
      resource => {
        // eslint-disable-next-line no-param-reassign
        resource.request = resource.request.replace(
          /logger.node/,
          `logger.web`,
        );
      },
    )
  );
  
  return config;
};
