module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('routes-yaml')
      .test(/routes\.yaml$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-router-loader-yaml')
      .loader('vue-router-loader-yaml')
      .end();
  },
  runtimeCompiler: true,
};
