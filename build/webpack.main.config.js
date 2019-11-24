const rules =  require('./rules')
const path = require('path')

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  context: path.resolve(__dirname, '../src'),
  target: 'electron-main',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss']
  },
  entry: './src/main.ts',
  // webpack 常规配置
  module: {
    rules: rules,
  }
}
