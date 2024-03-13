import {Webpack} from "./types";
import {buildPlugins} from "./buildPlugins";
import {buildModules} from "./buildModules";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";
import webpack from "webpack";
import Props = Webpack.Props;


export function buildWebpackConfig(props: Props): webpack.Configuration {
    return {
        entry: props.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            publicPath: '/',
            path: props.paths.output,
            clean: true
        },
        mode: props.buildEnv.mode,
        plugins: buildPlugins(props),
        module: buildModules(),
        resolve: buildResolvers(props.paths),
        devServer: buildDevServer(props.buildEnv)
    }
}
