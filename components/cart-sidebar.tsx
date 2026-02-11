'use client';

import { useCart } from '@/lib/cart-context';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function CartSidebar() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, total } = useCart();

  const getWhatsAppMessage = () => {
    if (items.length === 0) return '';

    const itemsList = items
      .map((item) => `- ${item.product.name}: ${item.quantity} meter(s) @ PKR ${item.product.price}`)
      .join('\n');

    return `Hi! I'd like to order:\n\n${itemsList}\n\nTotal: PKR ${total.toLocaleString()}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(getWhatsAppMessage());
    const whatsappNumber = '923001234567'; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 z-50 w-full max-w-sm h-full bg-background border-l border-border shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-foreground">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground font-medium mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground">Add some beautiful laces to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={item.product.id} className="flex gap-3 pb-4 border-b border-border animate-in fade-in slide-in-from-right-4 duration-300" style={{ animationDelay: `${index * 50}ms` }}>
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-20 h-20 bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-medium text-sm text-foreground line-clamp-2">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      PKR {item.product.price.toLocaleString()} {item.product.unit}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 text-xs border border-border rounded hover:bg-muted transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 text-xs border border-border rounded hover:bg-muted transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto p-1 text-destructive hover:bg-destructive/10 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 sm:p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-foreground font-medium">Total:</span>
              <span className="text-xl font-bold text-primary">
                PKR {total.toLocaleString()}
              </span>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.082.351-2.916.954.929-.89 2.359-1.431 3.804-1.431 3.368 0 6.109 2.618 6.109 5.84 0 .995-.272 1.968-.782 2.828-.89-1.775-2.746-3.104-4.888-3.104-1.309 0-2.531.414-3.543 1.12-.434.351-.826.744-1.167 1.174-.162.204-.315.412-.457.622-.304-.422-.485-.933-.485-1.479 0-1.795 1.348-3.324 3.129-3.324z" />
              </svg>
              Purchase via WhatsApp
            </button>

            {/* Continue Shopping */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border-2 border-border text-foreground py-3 rounded-lg font-medium hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
