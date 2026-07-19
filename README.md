# Laravel 13 + Filament v5 + Inertia React Starter Kit

A production-ready Laravel starter kit combining **Filament v5** for the admin backend and **Inertia.js React 19** for the public frontend, built with **Tailwind CSS v4** and **Laravel Wayfinder**.

## Key Features

- **Filament v5:** Complete backend and admin panel administration.
- **Inertia React 19:** Fast, SPA-like frontend powered by React 19 and Inertia.js v3.
- **Unified Authentication:** Authentication is handled exclusively by Filament. The public-facing site has no authentication logic.
- **Type-Safe Routing:** Driven by **Laravel Wayfinder**, which generates typed TypeScript functions for backend routes automatically.
- **Tailwind CSS v4:** Styling configured with native dark mode toggling.
- **Server Side Rendering (SSR):** Enabled for fast loads and SEO optimization.

---

## Getting Started

Follow these steps to create and run a new project using this starter kit.

### Prerequisites

Ensure you have the following installed:
- **PHP 8.4+**
- **Composer**
- **Node.js 20+** & **npm**
- A database engine (SQLite, MySQL, PostgreSQL, etc.)

---

### Step 1: Install Dependencies

After cloning the repository, navigate into the directory and install both backend and frontend dependencies:

```bash
# Install PHP dependencies
composer install

# Install JS dependencies
npm install
```

### Step 2: Configure Environment

Copy the example environment file and generate the application key:

```bash
# Copy env configuration
cp .env.example .env

# Generate application key
php artisan key:generate
```

Open `.env` and set up your database configuration:

```env
DB_CONNECTION=sqlite
# Or configure MySQL/PostgreSQL as needed
```

### Step 3: Run Migrations

Migrate the database to generate the tables needed for authentication and default models:

```bash
php artisan migrate
```

### Step 4: Create an Admin User

Since authentication is handled entirely by Filament, you must create a Filament user to access the backend dashboard:

```bash
php artisan make:filament-user
```

Follow the prompts to configure the name, email address, and password for your admin account.

### Step 5: Start Development Services

To start writing code with Hot Module Replacement (HMR) and a local web server, run the following commands in separate terminal sessions:

```bash
# Start frontend asset compiler
npm run dev

# Start Laravel backend server
php artisan serve
```

- **Frontend Application:** `http://127.0.5.1:8000` (or your local Herd URL)
- **Filament Admin Dashboard:** `http://127.0.0.1:8000/admin`

---

## Conventions & Usage

### 1. Kebab-Case Files
All JavaScript/TypeScript files (pages, components, layouts, hooks) must follow **kebab-case** naming format (e.g. `welcome.tsx`, `app-layout.tsx`, `theme-toggle.tsx`).

### 2. Type-Safe Routes with Wayfinder
Ziggy is not used in this project. Instead, **Laravel Wayfinder** generates type-safe TypeScript helpers for your backend routes. 

When you define a named route on the backend in `routes/web.php`:
```php
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
```

Run the generator:
```bash
php artisan wayfinder:generate
```

Import and call it directly in your JSX:
```tsx
import { Link } from '@inertiajs/react';
import { home } from '../routes';

export default function Nav() {
    return (
        <Link href={home.url()}>Go Home</Link>
    );
}
```

### 3. Theme Toggle & Dark Mode
Manual light/dark mode selection is handled using the `.dark` selector. Redefined inside `resources/css/app.css` using:
```css
@custom-variant dark (&:where(.dark, .dark *));
```
Use the `useAppearance` hook in React to switch between `'light'`, `'dark'`, or `'system'` themes.
