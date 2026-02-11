'use client';

import React from "react"

import { createContext, useContext, useState, useEffect } from 'react';
import { Product } from './products';

interface FavoritesContextType {
  favorites: Product[];
  isFavorite: (productId: string) => boolean;
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  toggleFavorite: (product: Product) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('lace-favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('[v0] Error loading favorites:', error);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('lace-favorites', JSON.stringify(favorites));
    }
  }, [favorites, isHydrated]);

  const isFavorite = (productId: string) => {
    return favorites.some(fav => fav.id === productId);
  };

  const addToFavorites = (product: Product) => {
    if (!isFavorite(product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites(favorites.filter(fav => fav.id !== productId));
  };

  const toggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
}
