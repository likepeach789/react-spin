const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js'); // 引用公共配置
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 用于将组件的css打包成单独的文件输出到`lib`目录中
const postcssNormalize = require('postcss-normalize');

const devConfig = {
    mode: 'development', // 开发模式
    entry: path.join(__dirname, "../example/src/app.jsx"), // 项目入口，处理资源文件的依赖关系
    output: {
        path: path.join(__dirname, "../example/src/"),
        filename: "bundle.js", // 使用webpack-dev-sevrer启动开发服务时，并不会实际在`src`目录下生成bundle.js，打包好的文件是在内存中的，但并不影响我们使用。
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader'
                    , 'css-loader'
                    , {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                require('postcss-preset-env')({
                                    autoprefixer: {
                                        // flexbox: 'no-2009',
                                    },
                                    stage: 3,
                                }),
                                postcssNormalize(),
                            ]
                        }
                    }
                    , 'sass-loader'
                ],
                sideEffects: true,
            }

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '../example/src/'),
        compress: true,
        port: 3001, // 启动端口为 3001 的服务
        open: true // 自动打开浏览器
    },
};
module.exports = merge(devConfig, baseConfig); // 将baseConfig和devConfig合并为一个配置
