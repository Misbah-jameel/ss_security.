'use client';

import { Header } from '@/components/header';
import { CartSidebar } from '@/components/cart-sidebar';
import { ProductCard } from '@/components/product-card';
import { PRODUCTS, LACE_CATEGORIES } from '@/lib/products';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'newest'>('newest');

  const filteredProducts = selectedCategory
    ? PRODUCTS.filter((p) => p.category === selectedCategory)
    : PRODUCTS;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return PRODUCTS.indexOf(a) - PRODUCTS.indexOf(b);
  });

  return (
    <>
      <Header />
      <CartSidebar />

      <main className="w-full">
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30 py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Shop All Laces
            </h1>
            <p className="text-muted-foreground mt-2">
              Browse our complete collection of premium laces
            </p>
          </div>
        </section>

        {/* Shop Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Categories Filter */}
                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedCategory === null
                          ? 'bg-primary text-primary-foreground font-medium'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      All Laces
                    </button>
                    {LACE_CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground font-medium'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <div className="mb-8 flex items-center justify-between">
                <p className="text-muted-foreground">
                  Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
                  {selectedCategory && ` in ${selectedCategory}`}
                </p>
              </div>

              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-muted-foreground mb-4">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* WhatsApp Fixed Button */}
      <a
        href="https://wa.me/923001234567?text=Hi%20I%20am%20interested%20in%20your%20laces"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-30"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.082.351-2.916.954.929-.89 2.359-1.431 3.804-1.431 3.368 0 6.109 2.618 6.109 5.84 0 .995-.272 1.968-.782 2.828-.89-1.775-2.746-3.104-4.888-3.104-1.309 0-2.531.414-3.543 1.12-.434.351-.826.744-1.167 1.174-.162.204-.315.412-.457.622-.304-.422-.485-.933-.485-1.479 0-1.795 1.348-3.324 3.129-3.324z" />
        </svg>
      </a>
    </>
  );
}
