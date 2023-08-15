import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return plugins
}
