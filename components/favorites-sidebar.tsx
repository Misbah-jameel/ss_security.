'use client';

import { X, Heart, Share2, ShoppingBag } from 'lucide-react';
import { useFavorites } from '@/lib/favorites-context';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function FavoritesSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (productId: string, productName: string) => {
    const url = `${window.location.origin}/product/${productId}`;
    navigator.clipboard.writeText(url);
    setCopiedId(productId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-full sm:w-96 bg-background border-l border-border z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-current" />
            <h2 className="text-lg font-semibold text-foreground">
              My Favorites ({favorites.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close favorites"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Heart className="w-12 h-12 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground mb-4">No favorites yet</p>
              <Link
                href="/shop"
                onClick={onClose}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Browse Laces
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((product, index) => (
                <div
                  key={product.id}
                  className="flex gap-4 pb-4 border-b border-border last:border-b-0 animate-in fade-in slide-in-from-right-4 duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image */}
                  <Link
                    href={`/product/${product.id}`}
                    onClick={onClose}
                    className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden bg-muted hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${product.id}`}
                      onClick={onClose}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors line-clamp-2"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">
                      {product.category}
                    </p>
                    <p className="text-sm font-bold text-primary mt-2">
                      PKR {product.price.toLocaleString()}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="flex-1 px-2 py-1 bg-primary text-primary-foreground text-xs rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
                        aria-label="Add to cart"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Add
                      </button>
                      <button
                        onClick={() => handleShare(product.id, product.name)}
                        className="px-2 py-1 border border-border rounded hover:border-primary transition-colors"
                        aria-label="Copy share link"
                        title={copiedId === product.id ? 'Copied!' : 'Copy link'}
                      >
                        <Share2 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromFavorites(product.id)}
                        className="px-2 py-1 border border-border text-red-500 hover:bg-red-50 rounded transition-colors"
                        aria-label="Remove from favorites"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
