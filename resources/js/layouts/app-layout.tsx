import { Link } from '@inertiajs/react';
import { ThemeToggle } from '../components/theme-toggle';
import { ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 selection:bg-indigo-500/30 transition-colors duration-300">
            <nav className="border-b border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-8">
                            <Link href="/" className="font-bold text-xl tracking-tight text-indigo-600 dark:text-indigo-400">
                                StarterKit
                            </Link>
                            <div className="hidden md:flex gap-6 text-sm font-medium">
                                <Link href="/" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                                    Home
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <a href="/admin" className="text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
                                Dashboard
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                {children}
            </main>

            <footer className="border-t border-gray-200 dark:border-zinc-800 py-12 mt-20 bg-white dark:bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Laravel + React + Filament Starter Kit. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
