// 'use client';

// import { useState } from 'react';
// import { FavoritesProvider } from '@/lib/favorites-context';
// import { FavoritesSidebar } from '@/components/favorites-sidebar';
// import { Footer } from '@/components/footer';

// export default function FavoritesPage() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <FavoritesProvider>
//       <div className="min-h-screen flex flex-col bg-background text-foreground">
        
//         {/* Favorites Sidebar */}
//         <FavoritesSidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <h1 className="text-3xl font-bold mb-6">My Favorites</h1>
//           <p className="text-muted-foreground mb-6">
//             Here are all your favorite products. You can add them to cart, share, or remove them.
//           </p>

//           {/* Example placeholder cards (replace with real data if needed) */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* You can render favorite product cards here if needed */}
//           </div>
//         </main>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </FavoritesProvider>
//   );
// }
