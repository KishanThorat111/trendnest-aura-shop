
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse our products, add items to your cart, and proceed to checkout. You can pay using various methods including UPI, credit/debit cards, and net banking."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including UPI, credit/debit cards, net banking, and popular digital wallets like Paytm, PhonePe, and Google Pay."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-7 business days within India. Express shipping is available for 1-3 business days at an additional cost."
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free shipping on orders above ₹1,000. For orders below this amount, a small shipping fee of ₹99 applies."
    },
    {
      question: "Can I return or exchange items?",
      answer: "Absolutely! We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some categories like electronics have specific return conditions."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email and SMS. You can also track your order from your dashboard."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your credit card details on our servers."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within India. We're working on expanding to international shipping in the future."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team through our contact page, email at support@trendnest.com, or call us at +91-98765-43210 during business hours."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer support team for assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about shopping with TrendNest.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/40 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="text-primary hover:underline font-medium"
          >
            Contact our support team
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
