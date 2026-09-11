import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { createContext, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
//#endregion
//#region resources/js/hooks/use-appearance.tsx
var AppearanceContext = createContext(void 0);
function AppearanceProvider({ children }) {
	const [appearance, setAppearance] = useState(() => {
		if (typeof window !== "undefined") return localStorage.getItem("appearance") || "system";
		return "system";
	});
	useEffect(() => {
		if (typeof window === "undefined") return;
		const root = window.document.documentElement;
		const applyTheme = (theme) => {
			root.classList.remove("light", "dark");
			root.classList.add(theme);
		};
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleSystemThemeChange = () => {
			if (appearance === "system") applyTheme(mediaQuery.matches ? "dark" : "light");
		};
		localStorage.setItem("appearance", appearance);
		if (appearance === "system") {
			applyTheme(mediaQuery.matches ? "dark" : "light");
			mediaQuery.addEventListener("change", handleSystemThemeChange);
			return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
		} else applyTheme(appearance);
	}, [appearance]);
	return /* @__PURE__ */ jsx(AppearanceContext.Provider, {
		value: {
			appearance,
			setAppearance
		},
		children
	});
}
function useAppearance() {
	const context = useContext(AppearanceContext);
	if (context === void 0) throw new Error("useAppearance must be used within an AppearanceProvider");
	return context;
}
//#endregion
//#region resources/js/ssr.tsx
var appName = "Laravel Starter";
createServer((page) => createInertiaApp({
	page,
	render: ReactDOMServer.renderToString,
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* #__PURE__ */ Object.assign({ "./pages/welcome.tsx": () => import("./assets/welcome-D6A4o9jZ.js") })),
	setup: ({ App, props }) => /* @__PURE__ */ jsx(AppearanceProvider, { children: /* @__PURE__ */ jsx(App, { ...props }) })
}));
//#endregion
export { useAppearance as t };
