import webpack from "webpack";
import {buildWebpackConfig} from "./config/buildWebpackConfig";
import path from "path";
import {Webpack} from "@/config/types";
import BuildEnv = Webpack.BuildEnv;
import Paths = Webpack.Paths;
import Props = Webpack.Props;

export default (env: BuildEnv): webpack.Configuration => {
    const paths: Paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        alias: {
            src: path.resolve(__dirname, 'src'),
            public: path.resolve(__dirname, 'public')
        }
    }
    const props: Props = {
        buildEnv: env,
        paths: paths
    }
    return buildWebpackConfig(props)
}