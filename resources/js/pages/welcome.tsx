import AppLayout from '../layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, BookOpen, Code as CodeIcon, Compass, Layout, Lock, Sparkles, Terminal } from 'lucide-react';
import { home } from '../routes';
import { buttonVariants } from '@/components/ui/button';

export default function Welcome() {
    return (
        <AppLayout>
            <Head title="Welcome to StarterKit" />

            <div className="relative isolate overflow-hidden">
                {/* Hero section */}
                <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-28 lg:px-8 lg:pt-32">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
                            <Sparkles className="w-3.5 h-3.5" />
                            Laravel 13 + Filament v5 + Inertia React 19
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            The Ultimate Full-Stack Starter Kit
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                            A production-ready foundation combining Laravel 13, Filament v5 for the administration system, and Inertia React 19 for the public-facing application, styled with Tailwind CSS v4.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="/admin" className={buttonVariants({ size: "lg", className: "group shadow-lg hover:-translate-y-0.5 transition-all" })}>
                                Access Panel <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#features" className={buttonVariants({ variant: "ghost", className: "group" })}>
                                Learn more <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* What is this? Section */}
                <div id="features" className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 border-t border-border">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-primary">Robust Architecture</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            What does this Starter Kit do?
                        </p>
                        <p className="mt-4 text-lg text-muted-foreground">
                            It merges the absolute best parts of the Laravel ecosystem into a single unified workspace.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2">
                            {/* Unified Authentication */}
                            <div className="flex gap-x-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">Unified Authentication</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Authentication belongs exclusively to Filament. Users log in via Filament's native administration system, leaving the public Inertia React frontend clean of authentication logic.
                                    </p>
                                </div>
                            </div>

                            {/* Type-Safe Routing */}
                            <div className="flex gap-x-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                                    <Compass className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">Laravel Wayfinder</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Complete type-safety. Using Laravel Wayfinder, TypeScript definitions of your Laravel controllers and routes are auto-generated. No more hardcoded URLs or out-of-sync paths.
                                    </p>
                                </div>
                            </div>

                            {/* Tailwind CSS v4 */}
                            <div className="flex gap-x-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">Tailwind CSS v4</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Vastly simplified style configuration, out-of-the-box CSS nesting, and fully responsive layouts. The package includes native light and dark mode toggling support.
                                    </p>
                                </div>
                            </div>

                            {/* Server-Side Rendering */}
                            <div className="flex gap-x-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                                    <CodeIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">React 19 & SSR</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Optimized performance using React 19's virtual DOM structure combined with Inertia Server Side Rendering (SSR) for lightning-fast first contentful paint and SEO optimization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How to use? Section */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 border-t border-border">
                    <div className="mx-auto max-w-2xl lg:text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-primary">Developer Guide</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            How to Use this Package
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Step 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">1</span>
                                    <h3 className="text-xl font-bold text-foreground">Running Development Services</h3>
                                </div>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Start the Vite server to get Hot Module Replacement (HMR) for your Inertia React frontend. In another window, run the Laravel development server.
                                </p>
                            </div>
                            <div className="lg:col-span-7 bg-zinc-950 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs">
                                <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800">
                                    <Terminal className="w-4 h-4 text-gray-400" />
                                    <span>Vite Dev & Serve</span>
                                </div>
                                <p className="text-gray-400"># Start the frontend asset builder</p>
                                <p className="text-primary-foreground mb-4">npm run dev</p>
                                <p className="text-gray-400"># Start your Laravel backend</p>
                                <p className="text-primary-foreground">php artisan serve</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">2</span>
                                    <h3 className="text-xl font-bold text-foreground">Type-Safe Routing with Wayfinder</h3>
                                </div>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Wayfinder automatically generates JS functions from named Laravel routes. You don't need Ziggy anymore. Import the route directly from <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">@/routes</code>.
                                </p>
                            </div>
                            <div className="lg:col-span-7 bg-zinc-950 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs">
                                <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800">
                                    <CodeIcon className="w-4 h-4 text-gray-400" />
                                    <span>resources/js/pages/welcome.tsx</span>
                                </div>
                                <p className="text-emerald-400">import &#123; Link &#125; from '@inertiajs/react';</p>
                                <p className="text-emerald-400">import &#123; home &#125; from '../routes';</p>
                                <br />
                                <p className="text-gray-400">// Rendering in JSX:</p>
                                <p className="text-gray-300">
                                    &lt;<span className="text-blue-400">Link</span> href=&#123;home.url()&#125;&gt;Home&lt;/<span className="text-blue-400">Link</span>&gt;
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">3</span>
                                    <h3 className="text-xl font-bold text-foreground">Creating New Pages</h3>
                                </div>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Simply create a new React component file inside <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">resources/js/pages</code> using kebab-case. Then render it using Inertia from your web routes.
                                </p>
                            </div>
                            <div className="lg:col-span-7 bg-zinc-950 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs">
                                <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800">
                                    <BookOpen className="w-4 h-4 text-gray-400" />
                                    <span>routes/web.php</span>
                                </div>
                                <p className="text-purple-400">use Inertia\Inertia;</p>
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
