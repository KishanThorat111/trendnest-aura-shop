
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, ShoppingCart, Heart, Search, User, Star } from 'lucide-react';

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TrendNest Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of online shopping with our innovative features and seamless user experience.
          </p>
        </div>

        {/* Demo Video Placeholder */}
        <div className="mb-16">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border border-border/40">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Play className="h-12 w-12 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Product Demo</h3>
                <p className="text-muted-foreground">
                  See TrendNest in action - from browsing to checkout
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-blue-500" />
                Smart Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI-powered search that understands your preferences and finds exactly what you're looking for.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Wishlist Magic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Save your favorite items and get notified when they go on sale or back in stock.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-green-500" />
                Seamless Checkout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Lightning-fast checkout with multiple payment options and real-time order tracking.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-purple-500" />
                Personal Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Manage your orders, track shipments, and customize your shopping experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get personalized product suggestions based on your browsing history and preferences.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-5 w-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
                Modern Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Beautiful, responsive design that works perfectly on all devices with smooth animations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who have discovered their favorite products on TrendNest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Shopping
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
