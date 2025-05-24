
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Personal Information</h4>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us. This may include your name, email address, phone number, 
                  shipping address, and payment information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Usage Information</h4>
                <p className="text-muted-foreground">
                  We automatically collect certain information about your use of our website, including 
                  your IP address, browser type, operating system, referring URLs, and pages visited.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Process and fulfill your orders</li>
                <li>• Communicate with you about your orders and account</li>
                <li>• Provide customer support</li>
                <li>• Send you promotional communications (with your consent)</li>
                <li>• Improve our website and services</li>
                <li>• Detect and prevent fraud</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• With service providers who assist us in operating our website and business</li>
                <li>• When required by law or to protect our rights</li>
                <li>• In connection with a business transfer or merger</li>
                <li>• With your explicit consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Access and update your personal information</li>
                <li>• Request deletion of your personal information</li>
                <li>• Opt out of promotional communications</li>
                <li>• Request a copy of your data</li>
                <li>• File a complaint with relevant authorities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your browsing experience, analyze website 
                traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 space-y-1 text-muted-foreground">
                <p>Email: privacy@trendnest.com</p>
                <p>Phone: +91-98765-43210</p>
                <p>Address: 123 Tech Street, Bangalore, Karnataka 560001, India</p>
              </div>
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

export default Privacy;
