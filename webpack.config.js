const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const basePath = __dirname
const distPath = 'dist'
const sourcePath = './src/js/index.js'
const indexInput = './src/index.html'
const indexOutput = 'index.html'
module.exports={
mode:'development',
resolve:{
  extensions:['.js']
},
entry:{
  app: ['./src/js/index.js']
},
output:{
  path:path.join(basePath,distPath),
  filename:'js/[name].js'
},
devServer:{
  contentBase : path.join(basePath,distPath),
  open: true
},

module:{
  rules:[
    {
      test:/\.js$/,
      exclude: /node_modules/,
      use:{
        loader:'babel-loader',
      }
      
    },
    {
      test:/\.(scss|sass|css)$/,
      exclude:/node_modules/,
      loaders:[
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    },
    {
      test:/\.(png|jpg|gif)$/,
      use:[
        {
        loader:'file-loader',
          options:{
            outputPath:'images/',
            publicPath:'images/'
          }
        }
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