import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const cesiumSource = "node_modules/cesium/Build/Cesium";
const cesiumBaseUrl = "cesiumStatic";

export default defineConfig({
	plugins: [
		viteStaticCopy({
			targets: [
				{ src: `${cesiumSource}/ThirdParty`, dest: cesiumBaseUrl },
				{ src: `${cesiumSource}/Workers`, dest: cesiumBaseUrl },
				{ src: `${cesiumSource}/Assets`, dest: cesiumBaseUrl },
				{ src: `${cesiumSource}/Widgets`, dest: cesiumBaseUrl },
			],
		}),
	],
	define: {
		CESIUM_BASE_URL: JSON.stringify(cesiumBaseUrl),
	},
});
