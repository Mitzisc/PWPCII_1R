const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//iportando el eslint
const  EslintWebpackPlugin  =  require ( 'eslint-webpack-plugin' ) ;
const { loader } = require('mini-css-extract-plugin');
module.exports = {
    //Establce el modo de desarrollo
    mode:'development',
    //1. Especificar archivo de entrada
    entry: './client/index.js',
    //2.Especificar la salida
    output: {
        //3.Ruta absoluta de salida
        path: path.join(__dirname,'public'),
        //4.Nombre al archivo de salida
        filename: 'js/bundle.js',
        //5.Ruta del pack publico para fines del servidor de desarrollo.
        publicPath: '/'
    },
    devServer: {
        static: path.join(__dirname,'public'),
        port: process.env.PORT || '3000',
        host: 'localhost'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules bower_components)/,
                use:[
                    {
                        loader:'babel-loader',
                        options: {
                            presets:[
                                [
                                    '@babel/preset-env', 
                                    {
                                        'modules': false,
                                        'useBuiltIns' : 'usage', 
                                        'targets':{"chrome":"80"},
                                        'corejs': 3
                                    }
                                ]
                            ],
                            "plugins" : [
                                [
                                    "module-resolver",
                                    {
                                        "root" : ["./"],
                                        "alias":
                                        {
                                            "@client" :"./client",
                                        }
                                    }
                                ]
                            ]

                        }
                    }
                ]
            },
            {
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader']

            }
        ]
    },
    plugins:
    [
        new MiniCssExtractPlugin({
            filename: 'styles/app.css'
        }),
        new EslintWebpackPlugin()
    ]
}