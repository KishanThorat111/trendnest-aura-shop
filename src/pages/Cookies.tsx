
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn about how we use cookies to improve your browsing experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience by remembering your preferences 
                and improving website functionality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Essential Cookies</h4>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function properly. They enable basic 
                  features like page navigation, secure areas access, and shopping cart functionality.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Performance Cookies</h4>
                <p className="text-muted-foreground">
                  These cookies collect information about how visitors use our website, such as which 
                  pages are visited most often. This helps us improve our website performance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Functionality Cookies</h4>
                <p className="text-muted-foreground">
                  These cookies remember your preferences and choices to provide a more personalized 
                  experience, such as language settings and theme preferences.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                <p className="text-muted-foreground">
                  We use analytics cookies to understand how our website is being used and to improve 
                  user experience based on this data.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may use third-party services that set their own cookies, such as payment processors, 
                analytics providers, and social media platforms. These cookies are governed by the 
                respective third parties' privacy policies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You can control and manage cookies in various ways:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Browser settings: Most browsers allow you to block or delete cookies</li>
                <li>• Cookie preferences: Use our cookie preference center (if available)</li>
                <li>• Opt-out tools: Use third-party opt-out tools for analytics cookies</li>
                <li>• Private browsing: Use incognito or private browsing mode</li>
              </ul>
              <p className="text-muted-foreground">
                Please note that blocking certain cookies may affect website functionality and your user experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookie Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Session Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies are temporary and are deleted when you close your browser.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Persistent Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies remain on your device for a set period or until you delete them manually.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. Please check this page periodically 
                for updates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="mt-4 space-y-1 text-muted-foreground">
                <p>Email: privacy@trendnest.com</p>
                <p>Phone: +91-98765-43210</p>
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

export default Cookies;
