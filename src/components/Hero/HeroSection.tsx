
import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse animation-delay-4000"></div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm font-medium text-blue-600 dark:text-blue-400">
            🚀 AI-Powered Shopping Experience
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Discover Your Next
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Favorite Product
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of shopping with AI recommendations, 3D product views, 
            and personalized discovery. Join millions who've found their perfect match.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/demo">
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-md mx-auto">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-background" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
