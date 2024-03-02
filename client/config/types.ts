import webpack from "webpack";
import path from "path";

export namespace Webpack {
    export interface BuildEnv {
        mode: Pick<webpack.Configuration, 'mode'>['mode'],
        port: number,
    }

    export type Paths = {
        entry: string,
        output: string,
        html: string,
        alias: string,
    }

    export interface Props {
        buildEnv: BuildEnv,
        paths: Paths,
    }
}
