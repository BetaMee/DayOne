const rules =  require('./rules')

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.ts',
  // webpack 常规配置
  module: {
    rules: rules,
  }
};
