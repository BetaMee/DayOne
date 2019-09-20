const rules =  require('./rules')
const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
    alias: {
      '@store': path.resolve(__dirname, '../src/store'),
      '@interfaces': path.resolve(__dirname, '../src/interfaces')
    }
  },
  // webpack 常规配置
  module: {
    rules: rules
  }
}
