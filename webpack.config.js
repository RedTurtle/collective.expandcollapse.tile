const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'expand_collapse_compiled': './src/collective/expandcollapse/tile/browser/static/expand_collapse.js',
        'styles': './src/collective/expandcollapse/tile/browser/static/styles.scss'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'src/collective/expandcollapse/tile/browser/static/dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    externals: {
        jquery: 'jQuery'
    }
};
