
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import ProductCard from '../components/Product/ProductCard';
import { Button } from '@/components/ui/button';
import { useWishlist } from '../contexts/WishlistContext';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';

const Wishlist = () => {
  const { items, clearWishlist } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-32 h-32 mx-auto mb-6 bg-muted/30 rounded-full flex items-center justify-center">
              <Heart className="h-16 w-16 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-8">
              Save your favorite items to your wishlist and never lose track of what you love!
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
            <p className="text-muted-foreground">
              {items.length} {items.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
          
          {items.length > 0 && (
            <Button 
              variant="outline" 
              onClick={clearWishlist}
              className="hover:bg-destructive hover:text-destructive-foreground"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
