
import React from 'react';
import ProductCard from '../Product/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrendingSection = () => {
  // Mock trending products data
  const trendingProducts = [
    {
      id: '1',
      name: 'Wireless Pro Earbuds',
      price: 19999,
      originalPrice: 24999,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
      category: 'Audio',
      rating: 4.8,
      reviews: 1204,
      badge: 'Best Seller',
      trending: true
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 29999,
      originalPrice: 39999,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      category: 'Wearables',
      rating: 4.6,
      reviews: 856,
      trending: true
    },
    {
      id: '3',
      name: 'Minimalist Backpack',
      price: 8999,
      originalPrice: 12099,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      category: 'Accessories',
      rating: 4.7,
      reviews: 432,
      badge: 'Eco-Friendly',
      trending: true
    },
    {
      id: '4',
      name: 'Gaming Mechanical Keyboard',
      price: 15999,
      originalPrice: 19999,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
      category: 'Gaming',
      rating: 4.9,
      reviews: 2103,
      trending: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-muted/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 text-sm font-medium text-orange-600 dark:text-orange-400">
            🔥 Hot Right Now
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Trending Products
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what's hot and trending right now. These products are flying off our virtual shelves!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trendingProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products?filter=trending">
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              View All Trending
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
