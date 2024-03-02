import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {Webpack} from "./types";
import webpack = require("webpack");
import Props = Webpack.Props;
import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {buildPlugins} from "./buildPlugins";
import {buildModules} from "./buildModules";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";


export function buildWebpackConfig(props: Props): webpack.Configuration {
    return {
        entry: props.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: props.paths.output
        },
        mode: props.buildEnv.mode,
        plugins: buildPlugins(props),
        module: buildModules(),
        resolve: buildResolvers(props.paths),
        devServer: buildDevServer(props.buildEnv)
    }
}
