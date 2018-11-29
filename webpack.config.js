const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        first_component: '/src/js/first_component/index.js',
        vendor: ['react']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/js/components')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            optons: {
                presets: [
                    [
                        'es2015', {
                            modules: false
                        }
                    ]
                ]
            }
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: (module) => {
                module.context &&
                    module.context.indexOf('node_modules') !== -1;
            }
        })
    ]
}