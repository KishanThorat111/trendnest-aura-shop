
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones, Watch, Gamepad2, Laptop, Smartphone, Home } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 'audio',
      name: 'Audio & Music',
      description: 'Headphones, speakers, and audio gear',
      icon: Headphones,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop',
      productCount: 45
    },
    {
      id: 'wearables',
      name: 'Wearables',
      description: 'Smartwatches and fitness trackers',
      icon: Watch,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      productCount: 32
    },
    {
      id: 'gaming',
      name: 'Gaming',
      description: 'Controllers, keyboards, and gaming accessories',
      icon: Gamepad2,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
      productCount: 28
    },
    {
      id: 'computing',
      name: 'Computing',
      description: 'Laptops, tablets, and accessories',
      icon: Laptop,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      productCount: 67
    },
    {
      id: 'mobile',
      name: 'Mobile & Tablets',
      description: 'Smartphones, cases, and mobile accessories',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
      productCount: 89
    },
    {
      id: 'home',
      name: 'Smart Home',
      description: 'Home automation and smart devices',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
      productCount: 54
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
          <p className="text-muted-foreground">
            Discover trending products in your favorite categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group"
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in" 
                      style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">
                        {category.productCount} products
                      </span>
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        Explore →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Featured Categories Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Featured This Week</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop"
                    alt="Audio Collection"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-2">Premium Audio Collection</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover professional-grade headphones and speakers with studio-quality sound.
                  </p>
                  <Link 
                    to="/products?category=audio" 
                    className="text-primary hover:underline font-medium"
                  >
                    Shop Audio →
                  </Link>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop"
                    alt="Gaming Gear"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-2">Gaming Essentials</h3>
                  <p className="text-muted-foreground mb-4">
                    Level up your gaming experience with mechanical keyboards, mice, and controllers.
                  </p>
                  <Link 
                    to="/products?category=gaming" 
                    className="text-primary hover:underline font-medium"
                  >
                    Shop Gaming →
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
