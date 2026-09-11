import { Link } from '@inertiajs/react';
import { ThemeToggle } from './theme-toggle';
import { buttonVariants } from '@/components/ui/button';

export function Navigation() {
    return (
        <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="font-bold text-xl tracking-tight text-primary">
                            StarterKit
                        </Link>
                        <div className="hidden md:flex gap-6 text-sm font-medium">
                            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                                Home
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <a href="/admin" className={buttonVariants()}>
                            Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
