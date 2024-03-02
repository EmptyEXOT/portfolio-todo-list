import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {Webpack} from "./types";
import BuildEnv = Webpack.BuildEnv;

export const buildDevServer = ({port}: BuildEnv): DevServerConfiguration => {
    return {
        hot: true,
        port: port || 3000,
        historyApiFallback: true,
        open: true
    }
}