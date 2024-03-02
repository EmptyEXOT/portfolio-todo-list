import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {Webpack} from "./types";
import Props = Webpack.Props;

export const buildPlugins = ({paths, buildEnv}: Props): webpack.WebpackPluginInstance[] => {
    const plugins = [];

    plugins.push(new HtmlWebpackPlugin({template: paths.html}));

    if (buildEnv.mode == 'development') {
        plugins.push(new webpack.ProgressPlugin());
    }

    plugins.push(new CleanWebpackPlugin());

    plugins.push(new MiniCssExtractPlugin());

    return plugins;
}