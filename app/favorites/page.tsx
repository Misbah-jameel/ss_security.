'use client';

import { Footer } from '@/components/footer';

export default function FavoritesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to Favorites Page</h1>
        <p className="text-muted-foreground mb-6">
          You currently have no favorite products saved.
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
