import AppLayout from '../layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, BookOpen, Code, Compass, Layout, Lock, Settings, Sparkles, Terminal } from 'lucide-react';
import { home } from '../routes';

export default function Welcome() {
    return (
        <AppLayout>
            <Head title="Welcome to StarterKit" />

            <div className="relative isolate overflow-hidden">
                {/* Hero section */}
                <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-28 lg:px-8 lg:pt-32">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/50 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
                            <Sparkles className="w-3.5 h-3.5" />
                            Laravel 13 + Filament v5 + Inertia React 19
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-300">
                            The Ultimate Full-Stack Starter Kit
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            A production-ready foundation combining Laravel 13, Filament v5 for the administration system, and Inertia React 19 for the public-facing application, styled with Tailwind CSS v4.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/admin"
                                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 group"
                            >
                                Access Panel <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a 
                                href="#features" 
                                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* What is this? Section */}
                <div id="features" className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-100 dark:border-zinc-900">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Robust Architecture</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            What does this Starter Kit do?
                        </p>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            It merges the absolute best parts of the Laravel ecosystem into a single unified workspace.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2">
                            {/* Unified Authentication */}
                            <div className="flex gap-x-4 rounded-2xl border border-gray-100 dark:border-zinc-900 bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Unified Authentication</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                        Authentication belongs exclusively to Filament. Users log in via Filament's native administration system, leaving the public Inertia React frontend clean of authentication logic.
                                    </p>
                                </div>
                            </div>

                            {/* Type-Safe Routing */}
                            <div className="flex gap-x-4 rounded-2xl border border-gray-100 dark:border-zinc-900 bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
                                    <Compass className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Laravel Wayfinder</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                        Complete type-safety. Using Laravel Wayfinder, TypeScript definitions of your Laravel controllers and routes are auto-generated. No more hardcoded URLs or out-of-sync paths.
                                    </p>
                                </div>
                            </div>

                            {/* Tailwind CSS v4 */}
                            <div className="flex gap-x-4 rounded-2xl border border-gray-100 dark:border-zinc-900 bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tailwind CSS v4</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                        Vastly simplified style configuration, out-of-the-box CSS nesting, and fully responsive layouts. The package includes native light and dark mode toggling support.
                                    </p>
                                </div>
                            </div>

                            {/* Server-Side Rendering */}
                            <div className="flex gap-x-4 rounded-2xl border border-gray-100 dark:border-zinc-900 bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
                                    <Code className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">React 19 & SSR</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                        Optimized performance using React 19's virtual DOM structure combined with Inertia Server Side Rendering (SSR) for lightning-fast first contentful paint and SEO optimization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How to use? Section */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-100 dark:border-zinc-900">
                    <div className="mx-auto max-w-2xl lg:text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Developer Guide</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            How to Use this Package
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Step 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm">1</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Running Development Services</h3>
                                </div>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                                    Start the Vite server to get Hot Module Replacement (HMR) for your Inertia React frontend. In another window, run the Laravel development server.
                                </p>
                            </div>
                            <div className="lg:col-span-7 bg-zinc-900 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs">
                                <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800">
                                    <Terminal className="w-4 h-4 text-gray-400" />
                                    <span>Vite Dev & Serve</span>
                                </div>
                                <p className="text-gray-400"># Start the frontend asset builder</p>
                                <p className="text-indigo-400 mb-4">npm run dev</p>
                                <p className="text-gray-400"># Start your Laravel backend</p>
                                <p className="text-indigo-400">php artisan serve</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm">2</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Type-Safe Routing with Wayfinder</h3>
                                </div>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                                    Wayfinder automatically generates JS functions from named Laravel routes. You don't need Ziggy anymore. Import the route directly from <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400">@/routes</code>.
                                </p>
                            </div>
                            <div className="lg:col-span-7 bg-zinc-900 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs">
                                <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800">
                                    <Code className="w-4 h-4 text-gray-400" />
                                    <span>resources/js/pages/welcome.tsx</span>
                                </div>
                                <p className="text-emerald-500">import &#123; Link &#125; from '@inertiajs/react';</p>
                                <p className="text-emerald-500">import &#123; home &#125; from '../routes';</p>
                                <br />
                                <p className="text-gray-400">// Rendering in JSX:</p>
                                <p className="text-gray-300">
                                    &lt;<span className="text-indigo-400">Link</span> href=&#123;home.url()&#125;&gt;Home&lt;/<span className="text-indigo-400">Link</span>&gt;
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm">3</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Creating New Pages</h3>
                                </div>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                                    Simply create a new React component file inside <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400">resources/js/pages</code> using kebab-case. Then render it using Inertia from your web routes.
                                </p>
                            </div>
                            <div className="lg:col-span-7 bg-zinc-900 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs">
                                <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800">
                                    <BookOpen className="w-4 h-4 text-gray-400" />
                                    <span>routes/web.php</span>
                                </div>
                                <p className="text-blue-400">use Inertia\Inertia;</p>
                                <br />
                                <p className="text-gray-300">Route::get('/about', function () &#123;</p>
                                <p className="text-gray-300">{"    "}return Inertia::render('about-page');</p>
                                <p className="text-gray-300">&#125;)-&gt;name('about');</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
