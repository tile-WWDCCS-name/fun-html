const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index/script.js',
    charDisplay: './src/js/tools/charDisplay.js',
    randStr: './src/js/tools/randStr.js',
    strokes: './src/js/tools/strokes.js',
    styleLetter: './src/js/tools/styleLetter.js',
    zalog: './src/js/tools/zalog.js',
    idsAST: './src/js/tools/idsAST.js',
    seeker: './src/js/tools/seeker.js',
    CPStest: './src/js/tools/CPStest.js',
    SIprefix: './src/js/tools/SIprefix.js',
    audioFFT: './src/js/tools/audioFFT.js',
    GuClock: './src/js/tools/GuClock.js',
    DouCompass: './src/js/tools/DouCompass.js',
    HuAccelerometer: './src/js/tools/HuAccelerometer.js',
    lifeGame: './src/js/tools/lifeGame.js',
    pointMoveWithSeg: './src/js/tools/pointMoveWithSeg.js',
    randFuck: './src/js/tools/randFuck.js'
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 5000,
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // 使用 babel-loader
          options: {
            presets: ['@babel/preset-env'] // 使用 @babel/preset-env
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|webmanifest)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/favicon/[name][ext]'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '索引',
      template: './src/html/index/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: '字符显示器',
      template: './src/html/charDisplay.html',
      filename: 'tools/charDisplay.html',
      chunks: ['charDisplay']
    }),
    new HtmlWebpackPlugin({
      title: '随机字符生成器',
      template: './src/html/randStr.html',
      filename: 'tools/randStr.html',
      chunks: ['randStr']
    }),
    new HtmlWebpackPlugin({
      title: '84-30 画的汉字',
      template: './src/html/strokes.html',
      filename: 'tools/strokes.html',
      chunks: ['strokes']
    }),
    new HtmlWebpackPlugin({
      title: '字母样式生成器',
      template: './src/html/styleLetter.html',
      filename: 'tools/styleLetter.html',
      chunks: ['styleLetter']
    }),
    new HtmlWebpackPlugin({
      title: 'zalog 文本生成器',
      template: './src/html/zalog.html',
      filename: 'tools/zalog.html',
      chunks: ['zalog']
    }),
    new HtmlWebpackPlugin({
      title: 'IDS 抽象语法树',
      template: './src/html/idsAST.html',
      filename: 'tools/idsAST.html',
      chunks: ['idsAST']
    }),
    new HtmlWebpackPlugin({
      title: '遠見齋｜字形檢索',
      template: './src/html/seeker.html',
      filename: 'tools/seeker.html',
      chunks: ['seeker']
    }),
    new HtmlWebpackPlugin({
      title: 'CPS 测试器',
      template: './src/html/CPStest.html',
      filename: 'tools/CPStest.html',
      chunks: ['CPStest']
    }),
    new HtmlWebpackPlugin({
      title: 'SI 词头',
      template: './src/html/SIprefix.html',
      filename: 'tools/SIprefix.html',
      chunks: ['SIprefix']
    }),
    new HtmlWebpackPlugin({
      title: '音频 FFT',
      template: './src/html/audioFFT.html',
      filename: 'tools/audioFFT.html',
      chunks: ['audioFFT']
    }),
    new HtmlWebpackPlugin({
      title: '“骨”钟',
      template: './src/html/GuClock.html',
      filename: 'tools/GuClock.html',
      chunks: ['GuClock']
    }),
    new HtmlWebpackPlugin({
      title: '“<span class="font-idc">&#xE100;</span>”指南针',
      template: './src/html/DouCompass.html',
      filename: 'tools/DouCompass.html',
      chunks: ['DouCompass']
    }),
    new HtmlWebpackPlugin({
      title: '生命游戏',
      template: './src/html/lifeGame.html',
      filename: 'tools/lifeGame.html',
      chunks: ['lifeGame']
    }),
    new HtmlWebpackPlugin({
      title: '点在移动时的连线',
      template: './src/html/pointMoveWithSeg.html',
      filename: 'tools/pointMoveWithSeg.html',
      chunks: ['pointMoveWithSeg']
    }),
    new HtmlWebpackPlugin({
      title: '随机草人器',
      template: './src/html/randFuck.html',
      filename: 'tools/randFuck.html',
      chunks: ['randFuck']
    })
  ],
  mode: 'production'
};