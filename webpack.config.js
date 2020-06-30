const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const basePath = __dirname
const distPath = 'dist'
const sourcePath = 'src/js/index.js'
const indexInput = 'src/index.html'
const indexOutput = 'index.html'
module.exports={
mode:'deveplopment',
resolve:{
  extensions:['.js']
},
entry:{
  app: ['@babel/polyfill',sourcePath]
},
output:{
  path:path.join(basePath,distPath),
  filename:'js/[name].js'
},

module:{
  rules:[
    {
      test:/\.js$/,
      exclude: /node_modules/,
      use:[
        'babel-loader'
      ]  
    }
  ]
},
  plugins:[
    new htmlWebpackPlugin({
      filename: indexOutput,
      template: indexInput  
    })
  
  ]
}