import { t as useAppearance } from "../ssr.js";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BookOpen, Code, Compass, Layout, Lock, Monitor, Moon, Sparkles, Sun, Terminal } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region resources/js/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region resources/js/components/theme-toggle.tsx
function ThemeToggle() {
	const { appearance, setAppearance } = useAppearance();
	const [open, setOpen] = useState(false);
	const toggleOpen = () => setOpen(!open);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsxs("button", {
			onClick: toggleOpen,
			className: "flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-200",
			"aria-label": "Toggle theme",
			children: [
				appearance === "light" && /* @__PURE__ */ jsx(Sun, { className: "w-5 h-5 text-yellow-500" }),
				appearance === "dark" && /* @__PURE__ */ jsx(Moon, { className: "w-5 h-5 text-indigo-400" }),
				appearance === "system" && /* @__PURE__ */ jsx(Monitor, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
			]
		}), open && /* @__PURE__ */ jsxs("div", {
			className: "absolute right-0 mt-2 w-36 rounded-md border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg z-50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("button", {
					onClick: () => {
						setAppearance("light");
						setOpen(false);
					},
					className: cn("flex w-full items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors", appearance === "light" ? "bg-gray-50 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"),
					children: [/* @__PURE__ */ jsx(Sun, { className: "w-4 h-4" }), " Light"]
				}),
				/* @__PURE__ */ jsxs("button", {
					onClick: () => {
						setAppearance("dark");
						setOpen(false);
					},
					className: cn("flex w-full items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors", appearance === "dark" ? "bg-gray-50 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"),
					children: [/* @__PURE__ */ jsx(Moon, { className: "w-4 h-4" }), " Dark"]
				}),
				/* @__PURE__ */ jsxs("button", {
					onClick: () => {
						setAppearance("system");
						setOpen(false);
					},
					className: cn("flex w-full items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors", appearance === "system" ? "bg-gray-50 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"),
					children: [/* @__PURE__ */ jsx(Monitor, { className: "w-4 h-4" }), " System"]
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/layouts/app-layout.tsx
function AppLayout({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 selection:bg-indigo-500/30 transition-colors duration-300",
		children: [
			/* @__PURE__ */ jsx("nav", {
				className: "border-b border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md sticky top-0 z-40",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex justify-between h-16 items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-8",
							children: [/* @__PURE__ */ jsx(Link, {
								href: "/",
								className: "font-bold text-xl tracking-tight text-indigo-600 dark:text-indigo-400",
								children: "StarterKit"
							}), /* @__PURE__ */ jsx("div", {
								className: "hidden md:flex gap-6 text-sm font-medium",
								children: /* @__PURE__ */ jsx(Link, {
									href: "/",
									className: "text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors",
									children: "Home"
								})
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ jsx(ThemeToggle, {}), /* @__PURE__ */ jsx("a", {
								href: "/admin",
								className: "text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm",
								children: "Dashboard"
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("main", { children }),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t border-gray-200 dark:border-zinc-800 py-12 mt-20 bg-white dark:bg-zinc-950",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Laravel + React + Filament Starter Kit. All rights reserved."
					]
				})
			})
		]
	});
}
//#endregion
//#region resources/js/pages/welcome.tsx
function Welcome() {
	return /* @__PURE__ */ jsxs(AppLayout, { children: [/* @__PURE__ */ jsx(Head, { title: "Welcome to StarterKit" }), /* @__PURE__ */ jsxs("div", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-28 lg:px-8 lg:pt-32",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/50 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }), "Laravel 13 + Filament v5 + Inertia React 19"]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-4xl font-extrabold tracking-tight sm:text-6xl text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-300",
							children: "The Ultimate Full-Stack Starter Kit"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",
							children: "A production-ready foundation combining Laravel 13, Filament v5 for the administration system, and Inertia React 19 for the public-facing application, styled with Tailwind CSS v4."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex items-center justify-center gap-x-6",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "/admin",
								className: "rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 group",
								children: ["Access Panel ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
							}), /* @__PURE__ */ jsxs("a", {
								href: "#features",
								className: "text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors",
								children: ["Learn more ", /* @__PURE__ */ jsx("span", {
									"aria-hidden": "true",
									children: "→"
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				id: "features",
				className: "mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-100 dark:border-zinc-900",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-2xl lg:text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400",
							children: "Robust Architecture"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
							children: "What does this Starter Kit do?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
							children: "It merges the absolute best parts of the Laravel ecosystem into a single unified workspace."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-x-4 rounded-2xl border border-gray-100 dark:border-zinc-900 bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400",
									children: /* @__PURE__ */ jsx(Lock, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-semibold text-gray-900 dark:text-white",
									children: "Unified Authentication"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-gray-600 dark:text-gray-300",
									children: "Authentication belongs exclusively to Filament. Users log in via Filament's native administration system, leaving the public Inertia React frontend clean of authentication logic."
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-x-4 rounded-2xl border border-gray-100 dark:border-zinc-900 bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400",
									children: /* @__PURE__ */ jsx(Compass, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-semibold text-gray-900 dark:text-white",
									children: "Laravel Wayfinder"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-gray-600 dark:text-gray-300",
									children: "Complete type-safety. Using Laravel Wayfinder, TypeScript definitions of your Laravel controllers and routes are auto-generated. No more hardcoded URLs or out-of-sync paths."
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-x-4 rounded-2xl border border-gray-100 dark:border-zinc-900 bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400",
									children: /* @__PURE__ */ jsx(Layout, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-semibold text-gray-900 dark:text-white",
									children: "Tailwind CSS v4"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-gray-600 dark:text-gray-300",
									children: "Vastly simplified style configuration, out-of-the-box CSS nesting, and fully responsive layouts. The package includes native light and dark mode toggling support."
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-x-4 rounded-2xl border border-gray-100 dark:border-zinc-900 bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400",
									children: /* @__PURE__ */ jsx(Code, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-semibold text-gray-900 dark:text-white",
									children: "React 19 & SSR"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-gray-600 dark:text-gray-300",
									children: "Optimized performance using React 19's virtual DOM structure combined with Inertia Server Side Rendering (SSR) for lightning-fast first contentful paint and SEO optimization."
								})] })]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-100 dark:border-zinc-900",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-2xl lg:text-center mb-16",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400",
						children: "Developer Guide"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
						children: "How to Use this Package"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-16",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-5",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm",
										children: "1"
									}), /* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-gray-900 dark:text-white",
										children: "Running Development Services"
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm text-gray-600 dark:text-gray-300",
									children: "Start the Vite server to get Hot Module Replacement (HMR) for your Inertia React frontend. In another window, run the Laravel development server."
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-7 bg-zinc-900 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800",
										children: [/* @__PURE__ */ jsx(Terminal, { className: "w-4 h-4 text-gray-400" }), /* @__PURE__ */ jsx("span", { children: "Vite Dev & Serve" })]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-400",
										children: "# Start the frontend asset builder"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-indigo-400 mb-4",
										children: "npm run dev"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-400",
										children: "# Start your Laravel backend"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-indigo-400",
										children: "php artisan serve"
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-5",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm",
										children: "2"
									}), /* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-gray-900 dark:text-white",
										children: "Type-Safe Routing with Wayfinder"
									})]
								}), /* @__PURE__ */ jsxs("p", {
									className: "mt-4 text-sm text-gray-600 dark:text-gray-300",
									children: [
										"Wayfinder automatically generates JS functions from named Laravel routes. You don't need Ziggy anymore. Import the route directly from ",
										/* @__PURE__ */ jsx("code", {
											className: "px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400",
											children: "@/routes"
										}),
										"."
									]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-7 bg-zinc-900 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800",
										children: [/* @__PURE__ */ jsx(Code, { className: "w-4 h-4 text-gray-400" }), /* @__PURE__ */ jsx("span", { children: "resources/js/pages/welcome.tsx" })]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-emerald-500",
										children: "import { Link } from '@inertiajs/react';"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-emerald-500",
										children: "import { home } from '../routes';"
									}),
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-400",
										children: "// Rendering in JSX:"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-gray-300",
										children: [
											"<",
											/* @__PURE__ */ jsx("span", {
												className: "text-indigo-400",
												children: "Link"
											}),
											" href={home.url()}>Home</",
											/* @__PURE__ */ jsx("span", {
												className: "text-indigo-400",
												children: "Link"
											}),
											">"
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-5",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm",
										children: "3"
									}), /* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-gray-900 dark:text-white",
										children: "Creating New Pages"
									})]
								}), /* @__PURE__ */ jsxs("p", {
									className: "mt-4 text-sm text-gray-600 dark:text-gray-300",
									children: [
										"Simply create a new React component file inside ",
										/* @__PURE__ */ jsx("code", {
											className: "px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400",
											children: "resources/js/pages"
										}),
										" using kebab-case. Then render it using Inertia from your web routes."
									]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-7 bg-zinc-900 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800",
										children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-gray-400" }), /* @__PURE__ */ jsx("span", { children: "routes/web.php" })]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-blue-400",
										children: "use Inertia\\Inertia;"
									}),
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-300",
										children: "Route::get('/about', function () {"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-gray-300",
										children: ["    ", "return Inertia::render('about-page');"]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-300",
										children: "})->name('about');"
									})
								]
							})]
						})
					]
				})]
			})
		]
	})] });
}
//#endregion
export { Welcome as default };
