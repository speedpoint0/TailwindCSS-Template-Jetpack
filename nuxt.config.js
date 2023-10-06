export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",
	server: {
		port: 6013, // default: 3000
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Qunatum",
		htmlAttrs: {
			lang: "en",
		},
		script: [
			{
				src: "https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js",
				defer: true,
			},
		],
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/css/main.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		"@nuxtjs/tailwindcss",
		"@nuxt/postcss8",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxtjs/router"],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},
};
