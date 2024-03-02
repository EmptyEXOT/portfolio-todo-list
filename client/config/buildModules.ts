import webpack from "webpack";
import {Webpack} from "./types";
import Props = Webpack.Props;
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildModules = (): webpack.ModuleOptions => {
    const rules: webpack.RuleSetRule[] = [];

    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
    }

    const stylesLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: true
                }
            },
            "sass-loader",
        ],
    }

    rules.push(tsLoader);
    rules.push(stylesLoader);
    return {rules};

}