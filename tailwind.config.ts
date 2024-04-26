import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				bgLight: "#faf6f5",
				brand: {
					50: "#FFFFFF",
					100: "#FFFFFF",
					200: "#FFFFFF",
					300: "#FFFFFF",
					400: "#DEFFEE",
					500: "#B5FFD9",
					600: "#7DFFBC",
					700: "#45FF9F",
					800: "#0DFF83",
					900: "#00D467",
				},
				sand: {
					50: "#D7D5D4",
					100: "#CDCACA",
					200: "#B9B6B5",
					300: "#A5A1A0",
					400: "#918D8B",
					500: "#7D7876",
					600: "#605C5B",
					700: "#434140",
					800: "#262524",
					900: "#0A0909",
				},
			},
		},
	},
	plugins: [],
}
export default config
