const { NxWebpackPlugin } = require("@nx/webpack");
const { join } = require("node:path");

module.exports = {
	output: {
		path: join(__dirname, "../../dist/apps/mock-nest"),
	},
	plugins: [
		new NxWebpackPlugin({
			target: "node",
			compiler: "tsc",
			main: "./src/main.ts",
			tsConfig: "./tsconfig.app.json",
			assets: ["./src/assets"],
			optimization: false,
			outputHashing: "none",
		}),
	],
};
