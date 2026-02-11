'use client';

import { Header } from '@/components/header';
import { CartSidebar } from '@/components/cart-sidebar';
import { ProductCard } from '@/components/product-card';
import { PRODUCTS, getProductById, getProductsByCategory } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';
import { Heart, Share2, Truck, Shield, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
            <Link href="/shop" className="text-primary hover:underline">
              Back to shop
            </Link>
          </div>
        </main>
      </>
    );
  }

  const relatedProducts = getProductsByCategory(product.category).filter(
    (p) => p.id !== product.id
  );

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    }
  };

  return (
    <>
      <Header />
      <CartSidebar />

      <main className="w-full">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/shop" className="hover:text-primary">Shop</Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Image */}
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-square bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <p className="text-accent text-sm uppercase tracking-widest font-semibold mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">
                    PKR {product.price.toLocaleString()}
                  </p>
                  <p className="text-muted-foreground">
                    Price per {product.unit}
                  </p>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mb-6">
                  <label className="text-sm font-medium text-foreground">Quantity:</label>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-muted transition-colors"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center py-2 border-x border-border bg-background"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mb-8">
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                      isAdded
                        ? 'bg-green-500 text-white'
                        : 'bg-primary text-primary-foreground hover:opacity-90'
                    }`}
                  >
                    {isAdded ? 'Added to Cart!' : 'Add to Cart'}
                  </button>
                  <button
                    onClick={handleShare}
                    className="px-6 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition-colors flex items-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                  <button className="px-6 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition-colors flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    <span className="hidden sm:inline">Save</span>
                  </button>
                </div>

                {/* Benefits */}
                <div className="space-y-3 pt-6 border-t border-border">
                  {[
                    { icon: Truck, title: 'Fast Delivery', desc: 'Quick shipping nationwide' },
                    { icon: Shield, title: 'Quality Guaranteed', desc: 'Premium lace products' },
                    { icon: RefreshCw, title: 'Easy Returns', desc: '30-day return policy' },
                  ].map((benefit) => (
                    <div key={benefit.title} className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary mt-1" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{benefit.title}</p>
                        <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 sm:py-16 border-t border-border bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.slice(0, 4).map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
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
