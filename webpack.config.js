const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webcomponent.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    //Loads css as string
                    "to-string-loader",
                    // Translates CSS into CommonJS
                    {loader: "css-loader", options:{esModule:false}},
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};