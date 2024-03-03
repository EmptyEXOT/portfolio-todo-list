import webpack from "webpack";

export namespace Webpack {
    export interface BuildEnv {
        mode: Pick<webpack.Configuration, 'mode'>['mode'],
        port: number,
    }

    export type Paths = {
        entry: string,
        output: string,
        html: string,
        src: string,
        alias: {
            src: string,
            public: string,
        }
    }

    export interface Props {
        buildEnv: BuildEnv,
        paths: Paths,
    }
}
