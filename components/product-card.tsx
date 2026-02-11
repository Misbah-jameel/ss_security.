'use client';

import React from "react"

import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { useFavorites } from '@/lib/favorites-context';
import { ShoppingBag, Heart, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  showLink?: boolean;
}

export function ProductCard({ product, showLink = true }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isAdding, setIsAdding] = useState(false);
  const [copied, setCopied] = useState(false);
  const isFav = isFavorite(product.id);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => setIsAdding(false), 600);
  };

  const handleShare = () => {
    const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/product/${product.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  const cardContent = (
    <div className="h-full flex flex-col border border-border rounded-xl p-4 hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105">
      {/* Image Container */}
      <div className="relative w-full aspect-square bg-muted rounded-lg overflow-hidden group">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons Overlay */}
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleFavorite}
            className={`p-2 rounded-lg backdrop-blur-md transition-all duration-300 ${
              isFav
                ? 'bg-red-500 text-white scale-110'
                : 'bg-white/80 text-gray-700 hover:bg-white hover:scale-110'
            }`}
            aria-label="Toggle favorite"
            title={isFav ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={handleShare}
            className="p-2 bg-white/80 text-blue-600 rounded-lg backdrop-blur-md hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Share product"
            title={copied ? 'Copied!' : 'Copy share link'}
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-4 flex flex-col">
        <p className="text-xs uppercase tracking-widest text-accent font-bold animate-pulse">
          {product.category}
        </p>
        <h3 className="text-sm sm:text-base font-semibold text-foreground mt-2 line-clamp-2 flex-1">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Button */}
        <div className="flex items-end justify-between mt-4 pt-4 border-t border-border">
          <div>
            <p className="text-base sm:text-lg font-bold text-primary">
              PKR {product.price.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground">
              {product.unit}
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className={`p-2.5 rounded-lg transition-all duration-300 ${
              isAdding
                ? 'bg-accent text-accent-foreground scale-125 rotate-12'
                : 'bg-primary text-primary-foreground hover:scale-110 hover:shadow-lg active:scale-95'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  if (!showLink) {
    return <div className="flex flex-col h-full">{cardContent}</div>;
  }

  return (
    <Link href={`/product/${product.id}`} className="flex flex-col h-full">
      {cardContent}
    </Link>
  );
}
