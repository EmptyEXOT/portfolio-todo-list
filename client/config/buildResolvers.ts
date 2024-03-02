import webpack from "webpack";
import {Webpack} from "./types";
import Paths = Webpack.Paths;

export const buildResolvers = ({alias}: Paths): webpack.ResolveOptions => {
    return {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {'@': alias}
    }
}