
import React, { useState, useEffect } from 'react';
import ProductCard from '../Product/ProductCard';
import { Button } from '@/components/ui/button';
import { RefreshCw, Sparkles } from 'lucide-react';

const AIRecommendations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([
    {
      id: '5',
      name: 'Smart Home Hub',
      price: 149,
      originalPrice: 179,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      category: 'Smart Home',
      rating: 4.5,
      reviews: 324,
      badge: 'AI Pick'
    },
    {
      id: '6',
      name: 'Portable Coffee Maker',
      price: 79,
      originalPrice: 99,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
      category: 'Kitchen',
      rating: 4.7,
      reviews: 189,
      badge: 'Perfect Match'
    },
    {
      id: '7',
      name: 'Wireless Charging Pad',
      price: 39,
      originalPrice: 59,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
      category: 'Tech',
      rating: 4.4,
      reviews: 567,
      badge: 'Great Value'
    }
  ]);

  const refreshRecommendations = async () => {
    setIsLoading(true);
    // Simulate AI recommendation refresh
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock new recommendations
    const newRecs = [
      {
        id: '8',
        name: 'Bluetooth Speaker',
        price: 89,
        originalPrice: 119,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
        category: 'Audio',
        rating: 4.6,
        reviews: 445,
        badge: 'AI Pick'
      },
      {
        id: '9',
        name: 'Desk Organizer',
        price: 29,
        originalPrice: 39,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
        category: 'Office',
        rating: 4.3,
        reviews: 234,
        badge: 'Trending'
      },
      {
        id: '10',
        name: 'LED Strip Lights',
        price: 24,
        originalPrice: 34,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
        category: 'Home Decor',
        rating: 4.5,
        reviews: 789,
        badge: 'Popular'
      }
    ];
    
    setRecommendations(newRecs);
    setIsLoading(false);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-600 dark:text-purple-400">
            <Sparkles className="mr-2 h-4 w-4" />
            AI-Powered
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              You Might Love This
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI analyzed your preferences and browsing history to curate these perfect matches just for you.
          </p>
        </div>

        {/* Recommendations Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              AI recommendations updated 2 minutes ago
            </span>
          </div>
          <Button
            onClick={refreshRecommendations}
            disabled={isLoading}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((product, index) => (
            <div 
              key={product.id}
              className={`animate-fade-in ${isLoading ? 'opacity-50' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 border border-purple-500/10">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">AI Insight</h3>
              <p className="text-muted-foreground">
                Based on your recent activity, you seem to prefer <strong>tech gadgets</strong> and <strong>minimalist designs</strong>. 
                These recommendations have a 94% compatibility score with your preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;
