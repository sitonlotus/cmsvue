const path = require('path');
const webpack=require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode:'production',
  entry: {
    index:'./src/index.js'
  },
  output: {
    filename: 'js/[name].min.js',
    path: path.resolve(__dirname, '/dist')
  }, 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },{
        test:/\.less$/,
        use:["style-loader","css-loader","less-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader:'file-loader',
            options:  {
              name:'[name].[ext]', //为文件配置自定义文件名模板
              outputPath:'img/'//为文件配置自定义 output 输出目录
            }
          }
        ]
      },
      {
        test:/\.(png|jpe?j|gif|svg)(\?.*)?$/,
        use:{
          loader:'url-loader',
          options:{
              limit:10240,
              name:'img/[name].[ext]'
          }
        },
      },
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      $:'jquery',
      jQuery:'jquery',
      'window.jQuery':'jquery'
    }),
  ],
  devServer: {
    contentBase: './dist',
    port:3000
  },
  resolve:{
    //引入路径是不用写对应的后缀名
    extensions: ['.js', '.vue', '.json'],
    //缩写扩展
    alias:{
      //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
      'vue$':'vue/dist/vue.esm.js',// 'vue/dist/vue.common.js' for webpack 1
      //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
      '@': path.resolve(__dirname,'./src'),
    }
  },
};