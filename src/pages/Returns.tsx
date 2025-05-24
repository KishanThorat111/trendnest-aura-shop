
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, Shield, Clock, CheckCircle } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Returns & Exchanges</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Shop with confidence knowing you can return or exchange items hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-semibold mb-2">30-Day Window</h3>
              <p className="text-sm text-muted-foreground">
                Return items within 30 days of delivery
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-semibold mb-2">Free Returns</h3>
              <p className="text-sm text-muted-foreground">
                No return shipping costs for most items
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <RotateCcw className="h-12 w-12 mx-auto mb-4 text-purple-500" />
              <h3 className="font-semibold mb-2">Easy Process</h3>
              <p className="text-sm text-muted-foreground">
                Simple online return initiation
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-semibold mb-2">Quick Refunds</h3>
              <p className="text-sm text-muted-foreground">
                Refunds processed within 5-7 business days
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Return Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Eligible Items</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Items must be in original condition with tags attached</li>
                    <li>• Unworn, unwashed, and undamaged items</li>
                    <li>• Original packaging and accessories included</li>
                    <li>• Receipt or proof of purchase required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Non-Returnable Items</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Personalized or customized items</li>
                    <li>• Intimate apparel and swimwear</li>
                    <li>• Perishable goods</li>
                    <li>• Digital downloads and gift cards</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How to Return an Item</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Initiate Return</h4>
                    <p className="text-muted-foreground">
                      Log into your account and go to 'My Orders'. Select the item you want to return and click 'Return Item'.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Print Return Label</h4>
                    <p className="text-muted-foreground">
                      We'll email you a prepaid return shipping label. Print it and attach it to the package.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Ship the Item</h4>
                    <p className="text-muted-foreground">
                      Package the item securely and drop it off at any authorized courier location or schedule a pickup.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Receive Refund</h4>
                    <p className="text-muted-foreground">
                      Once we receive and inspect your return, we'll process your refund within 5-7 business days.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Exchange Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We offer exchanges for size and color variations on most items. The exchange process is similar to returns:
              </p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Select 'Exchange' instead of 'Return' when initiating the process</li>
                <li>• Choose your preferred size or color</li>
                <li>• We'll ship the new item once we receive your return</li>
                <li>• No additional shipping charges for exchanges</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Refund Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Refund Methods</h4>
                  <p className="text-muted-foreground">
                    Refunds are processed to the original payment method. Credit card refunds may take 5-7 business days 
                    to appear on your statement, while UPI and digital wallet refunds are typically instant.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Partial Refunds</h4>
                  <p className="text-muted-foreground">
                    In some cases, partial refunds may be issued for items that show signs of use, damage, or missing parts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
