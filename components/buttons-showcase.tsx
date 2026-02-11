'use client';

import { ShoppingBag, Heart, Share2, Star, Zap } from 'lucide-react';

export function ButtonsShowcase() {
  return (
    <section className="py-16 sm:py-20 border-b border-border bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Our Beautiful Buttons
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Elegant button designs for every occasion
          </p>
        </div>

        {/* Button Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Classic Buttons */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="font-semibold text-foreground mb-6">Classic Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                Simple Button
              </button>
              <button className="px-6 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                Outline Button
              </button>
              <button className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                Secondary
              </button>
            </div>
          </div>

          {/* Pearl Buttons */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '100ms' }}>
            <h3 className="font-semibold text-foreground mb-6">Pearl Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2 bg-gradient-to-r from-amber-200 to-yellow-300 text-amber-900 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 border border-yellow-400">
                Pearl Gold
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-slate-200 to-gray-300 text-slate-900 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-400">
                Pearl Silver
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-rose-200 to-pink-300 text-rose-900 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 border border-pink-400">
                Pearl Rose
              </button>
            </div>
          </div>

          {/* Fancy Buttons */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
            <h3 className="font-semibold text-foreground mb-6">Fancy Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium hover:shadow-xl hover:scale-110 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Gradient
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="px-6 py-2 bg-white border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-xl">
                Rounded White
              </button>
            </div>
          </div>

          {/* Icon Buttons */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '300ms' }}>
            <h3 className="font-semibold text-foreground mb-6">Icon Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="p-3 bg-primary text-primary-foreground rounded-lg hover:scale-110 transition-transform" title="Add to cart">
                <ShoppingBag className="w-5 h-5" />
              </button>
              <button className="p-3 bg-red-500/10 text-red-500 rounded-lg hover:scale-110 transition-transform hover:bg-red-500/20" title="Add to favorites">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-3 bg-blue-500/10 text-blue-500 rounded-lg hover:scale-110 transition-transform hover:bg-blue-500/20" title="Share">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-3 bg-yellow-500/10 text-yellow-600 rounded-lg hover:scale-110 transition-transform hover:bg-yellow-500/20" title="Favorite">
                <Star className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Animated Buttons */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '400ms' }}>
            <h3 className="font-semibold text-foreground mb-6">Animated Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
                Pulse
              </button>
              <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium animate-pulse hover:animate-none transition-all">
                Glowing
              </button>
            </div>
          </div>

          {/* Size Variants */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '500ms' }}>
            <h3 className="font-semibold text-foreground mb-6">Size Variants</h3>
            <div className="flex flex-wrap gap-2 items-center">
              <button className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity">
                XS
              </button>
              <button className="px-4 py-1.5 text-sm bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity">
                Small
              </button>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity">
                Normal
              </button>
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity">
                Large
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
