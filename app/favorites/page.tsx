'use client';

import { Header } from '@/components/header';
import { FavoritesSidebar } from '@/components/favorites-sidebar';
import { ProductCard } from '@/components/product-card';
// import { Footer } from '@/components/footer';
import { useFavorites } from '@/lib/favorites-context';
import Link from 'next/link';
import { Heart, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  return (
    <>
      <Header onFavoritesOpen={() => setFavoritesOpen(true)} />
      <FavoritesSidebar isOpen={favoritesOpen} onClose={() => setFavoritesOpen(false)} />

      <main className="w-full min-h-screen">
        {/* Header Section */}
        <section className="border-b border-border py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Back to home"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                My Favorites
              </h1>
            </div>
            <p className="text-muted-foreground">
              You have {favorites.length} favorite {favorites.length === 1 ? 'item' : 'items'}
            </p>
          </div>
        </section>

        {/* Favorites Grid */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {favorites.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Heart className="w-16 h-16 text-muted-foreground/30 mb-6" />
                <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
                  No Favorites Yet
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Start adding your favorite laces to create a personalized collection
                </p>
                <Link
                  href="/shop"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Browse Our Collection
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {favorites.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
