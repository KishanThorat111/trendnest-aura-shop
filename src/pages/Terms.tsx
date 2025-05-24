
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing and using TrendNest, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials on TrendNest's website 
                for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-muted-foreground">This license shall automatically terminate if you violate any of these restrictions.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• You must be 18 years or older to create an account</li>
                <li>• You are responsible for maintaining the security of your account</li>
                <li>• You must provide accurate and complete information</li>
                <li>• You are responsible for all activities under your account</li>
                <li>• We reserve the right to suspend or terminate accounts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We strive to provide accurate product information, but we do not warrant that product descriptions 
                or other content is accurate, complete, reliable, current, or error-free. Colors and images may 
                vary from actual products.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing and Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• All prices are listed in Indian Rupees (INR)</li>
                <li>• Prices are subject to change without notice</li>
                <li>• We reserve the right to refuse or cancel orders</li>
                <li>• Payment must be received before order processing</li>
                <li>• Additional taxes and shipping fees may apply</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping and Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Shipping and return policies are detailed in separate documents. By placing an order, 
                you agree to our shipping terms and return policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Violating any applicable laws or regulations</li>
                <li>• Engaging in fraudulent transactions</li>
                <li>• Interfering with website security features</li>
                <li>• Using automated systems to access the website</li>
                <li>• Transmitting malicious code or viruses</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                TrendNest shall not be liable for any direct, indirect, incidental, consequential, or 
                exemplary damages resulting from your use of the website or products purchased.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws of India, 
                and any disputes shall be subject to the jurisdiction of Indian courts.
              </p>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>Last updated: January 2024</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
