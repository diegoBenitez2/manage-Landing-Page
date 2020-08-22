const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production';
const basePath = __dirname
const distPath = 'dist'
const sourcePath = './src/js/index.js'
const indexInput = './index.html'
const indexOutput = 'index.html'
module.exports={
// mode:'development',
resolve:{
  extensions:['.js']
},
entry:{
  app: ['./src/js/index.js']
},
output:{
  path:path.resolve(basePath,distPath),
  filename:'js/[name].js'
},
devServer:{
   // contentBase: path.join(__dirname,'dist'),
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
        
      use:[
        devMode ? 'style-loader': MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    },
    {
      test:/\.(png|jpg|gif|svg)$/,
      use:[
        {
        loader:'file-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'assets/images/',
            useRelativePath : true
          }
        },
          {
            loader: 'image-webpack-loader',
            options:{
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
      ]
  }
]
},
  plugins:[
    new htmlWebpackPlugin({
      filename: indexOutput,
      template: indexInput,
      minify:
      {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }  
    }),
    new MiniCssExtractPlugin({
    filename: 'css/[name.css]'
    })
    
  
  ]
}