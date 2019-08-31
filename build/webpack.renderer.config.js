const rules =  require('./rules')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss']
  },
  // webpack 常规配置
  module: {
    rules: rules
  }
};
