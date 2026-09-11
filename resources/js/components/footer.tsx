export function Footer() {
    return (
        <footer className="border-t border-border py-12 mt-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} Laravel + React + Filament Starter Kit. All rights reserved.
            </div>
        </footer>
    );
}
