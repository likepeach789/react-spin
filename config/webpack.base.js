const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 用于将组件的css打包成单独的文件输出到`lib`目录中
const postcssNormalize = require('postcss-normalize');

module.exports = {
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    module: {
        rules: [
            {
                // 使用 babel-loader 来编译处理 js 和 jsx 文件
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css/,
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
                ]
            }
        ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: "main.css" // 提取后的css的文件名
        // })
    ],
};
