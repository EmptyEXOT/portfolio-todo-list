import webpack from "webpack";

export const buildModules = (): webpack.ModuleOptions => {
    const rules: webpack.RuleSetRule[] = [];

    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
    }

    const stylesLoader: webpack.RuleSetRule = {
        test: /\.s?[ac]ss$/i,
        use: [
            "style-loader", "css-loader", "postcss-loader", "sass-loader"
        ],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    native: false,
                },
            },
        ],
        issuer: /\.[jt]sx?$/,
    }

    rules.push(fileLoader)
    rules.push(svgLoader)
    rules.push(tsLoader);
    rules.push(stylesLoader);
    return {rules};
}