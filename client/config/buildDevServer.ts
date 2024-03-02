import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {Webpack} from "./types";
import BuildEnv = Webpack.BuildEnv;

export const buildDevServer = ({port}: BuildEnv): DevServerConfiguration => {
    return {
        port: port || 3000,
        open: true,
    }
}