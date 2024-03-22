import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	root: __dirname,
	cacheDir: "../../node_modules/.vite/libs/ui",

	plugins: [
		react(),
		nxViteTsPaths(),
		svgr({
			svgrOptions: {
				exportType: "named",
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: "**/*.svg",
		}),
	],

	// Uncomment this if you are using workers.
	// worker: {
	//  plugins: [ nxViteTsPaths() ],
	// },

	test: {
		globals: true,
		cache: { dir: "../../node_modules/.vitest" },
		environment: "jsdom",
		include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		reporters: ["default"],
		coverage: { reportsDirectory: "../../coverage/libs/ui", provider: "v8" },
	},
});
