import { Moon, Sun, Monitor } from "lucide-react";
import { useAppearance } from "../hooks/use-appearance";
import { useState } from "react";
import { cn } from "../lib/utils";

export function ThemeToggle() {
    const { appearance, setAppearance } = useAppearance();
    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen(!open);

    return (
        <div className="relative">
            <button
                onClick={toggleOpen}
                className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-200"
                aria-label="Toggle theme"
            >
                {appearance === 'light' && <Sun className="w-5 h-5 text-yellow-500" />}
                {appearance === 'dark' && <Moon className="w-5 h-5 text-indigo-400" />}
                {appearance === 'system' && <Monitor className="w-5 h-5 text-gray-500 dark:text-gray-400" />}
            </button>
            
            {open && (
                <div className="absolute right-0 mt-2 w-36 rounded-md border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg z-50 overflow-hidden">
                    <button
                        onClick={() => { setAppearance('light'); setOpen(false); }}
                        className={cn("flex w-full items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors", appearance === 'light' ? 'bg-gray-50 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300')}
                    >
                        <Sun className="w-4 h-4" /> Light
                    </button>
                    <button
                        onClick={() => { setAppearance('dark'); setOpen(false); }}
                        className={cn("flex w-full items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors", appearance === 'dark' ? 'bg-gray-50 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300')}
                    >
                        <Moon className="w-4 h-4" /> Dark
                    </button>
                    <button
                        onClick={() => { setAppearance('system'); setOpen(false); }}
                        className={cn("flex w-full items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors", appearance === 'system' ? 'bg-gray-50 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300')}
                    >
                        <Monitor className="w-4 h-4" /> System
                    </button>
                </div>
            )}
        </div>
    );
}
