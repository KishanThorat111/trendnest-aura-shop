
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Clock, MapPin, Package } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our shipping options and delivery process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-blue-500" />
                Standard Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Delivery in 3-7 business days</li>
                <li>• Free shipping on orders above ₹1,000</li>
                <li>• ₹99 shipping fee for orders below ₹1,000</li>
                <li>• Available across India</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-500" />
                Express Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Delivery in 1-3 business days</li>
                <li>• ₹199 express shipping fee</li>
                <li>• Available in major cities</li>
                <li>• Priority handling and tracking</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-500" />
                Shipping Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Express Shipping Cities</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Mumbai</li>
                    <li>• Delhi</li>
                    <li>• Bangalore</li>
                    <li>• Chennai</li>
                    <li>• Hyderabad</li>
                    <li>• Pune</li>
                    <li>• Kolkata</li>
                    <li>• Ahmedabad</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Standard Shipping</h4>
                  <p className="text-muted-foreground">
                    Available to all serviceable PIN codes across India. 
                    We partner with reliable courier services to ensure 
                    your packages reach you safely and on time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-orange-500" />
                Order Processing & Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Order Processing Time</h4>
                  <p className="text-muted-foreground">
                    Orders are typically processed within 1-2 business days. 
                    You'll receive a confirmation email with tracking details once your order ships.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tracking Your Order</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Track from your account dashboard</li>
                    <li>• SMS and email updates at each step</li>
                    <li>• Real-time delivery status</li>
                    <li>• Estimated delivery window</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Delivery times may vary during festival seasons and adverse weather conditions</li>
                <li>• Someone must be available to receive the package at the delivery address</li>
                <li>• We'll attempt delivery up to 3 times before returning the package to our facility</li>
                <li>• For high-value items, signature confirmation may be required</li>
                <li>• Shipping to PO boxes is not available for certain product categories</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
