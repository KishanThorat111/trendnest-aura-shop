
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import ProductCard from '../components/Product/ProductCard';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, Star } from 'lucide-react';

const Trending = () => {
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
      id: '4',
      name: 'Gaming Mechanical Keyboard',
      price: 15999,
      originalPrice: 19999,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
      category: 'Gaming',
      rating: 4.9,
      reviews: 2103,
      trending: true
    },
    {
      id: '15',
      name: 'Wireless Charging Pad',
      price: 49,
      originalPrice: 69,
      image: 'https://images.unsplash.com/photo-1586953293634-a17e7c65dbbf?w=400&h=400&fit=crop',
      category: 'Tech',
      rating: 4.4,
      reviews: 432,
      trending: true
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      label: 'Top Trending',
      value: '50+ Items',
      description: 'Most popular this week'
    },
    {
      icon: Clock,
      label: 'Updated',
      value: 'Real-time',
      description: 'Updated every hour'
    },
    {
      icon: Star,
      label: 'Avg Rating',
      value: '4.7/5',
      description: 'Customer satisfaction'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trending Now
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what's hot right now. These products are flying off our virtual shelves!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-xl border border-border/40 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Trending Badge */}
        <div className="flex items-center gap-4 mb-8">
          <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2">
            🔥 Hot Right Now
          </Badge>
          <p className="text-muted-foreground">
            Based on recent views, purchases, and customer ratings
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Trending Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Trending Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Audio', 'Gaming', 'Wearables', 'Tech'].map((category, index) => (
              <div 
                key={category}
                className="p-6 rounded-xl border border-border/40 bg-card hover:bg-muted/20 transition-colors cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">{category}</div>
                  <div className="text-sm text-muted-foreground">Popular this week</div>
                  <div className="mt-2">
                    <Badge variant="outline" className="text-xs">
                      +{Math.floor(Math.random() * 50 + 10)}% views
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <section className="text-center py-12 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <h3 className="text-xl font-semibold mb-4">Join thousands of happy customers</h3>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-foreground">15K+</div>
              <div>Orders this month</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">4.8★</div>
              <div>Average rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">98%</div>
              <div>Customer satisfaction</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Trending;
