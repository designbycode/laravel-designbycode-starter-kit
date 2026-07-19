import '../css/app.css';

import { createRoot, hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { AppearanceProvider } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const application = (
            <AppearanceProvider>
                <App {...props} />
            </AppearanceProvider>
        );

        if (import.meta.env.DEV) {
            createRoot(el).render(application);
            return;
        }

        hydrateRoot(el, application);
    },
    progress: {
        color: '#4f46e5',
        showSpinner: true,
    },
});
