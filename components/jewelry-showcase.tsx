'use client';

import { useState } from 'react';

const jewelryItems = [
  {
    id: 1,
    name: 'Pearl Choker',
    color: 'bg-rose-100',
    icon: '◯',
    description: 'Elegant pearl choker necklace',
  },
  {
    id: 2,
    name: 'Golden Pendant',
    color: 'bg-amber-100',
    icon: '✦',
    description: 'Luxurious golden pendant necklace',
  },
  {
    id: 3,
    name: 'Diamond Set',
    color: 'bg-blue-100',
    icon: '◆',
    description: 'Sparkling diamond set necklace',
  },
  {
    id: 4,
    name: 'Emerald Charm',
    color: 'bg-emerald-100',
    icon: '❖',
    description: 'Beautiful emerald charm necklace',
  },
];

export function JewelryShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
          Pair With Jewelry
        </h3>
        <p className="text-muted-foreground">
          Complete your elegant look with our jewelry collection
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {jewelryItems.map((item) => (
          <button
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative p-6 rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Background */}
            <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Content */}
            <div className="relative space-y-3 text-center">
              <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-semibold text-foreground text-sm">
                {item.name}
              </h4>
              {hoveredId === item.id && (
                <p className="text-xs text-muted-foreground animate-in fade-in duration-300">
                  {item.description}
                </p>
              )}
            </div>

            {/* Border Glow Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>
    </div>
  );
}
