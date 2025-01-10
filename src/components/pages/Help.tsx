import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, HelpCircle, Book, MessageCircle } from "lucide-react";

const Help = () => {
  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Sign up for an account and follow our quick start guide in the documentation.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time with no penalties.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all our paid plans.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
          <p className="text-xl text-muted-foreground mb-8">
            How can we help you today?
          </p>
          <div className="max-w-xl mx-auto relative">
            <Input
              placeholder="Search for help..."
              className="pl-12 h-12 text-lg"
            />
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Book className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Documentation</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Browse our detailed documentation
            </p>
            <Button variant="ghost" className="w-full">
              View Docs
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <HelpCircle className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">FAQs</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Find answers to common questions
            </p>
            <Button variant="ghost" className="w-full">
              View FAQs
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <MessageCircle className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Contact Support</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get help from our support team
            </p>
            <Button variant="ghost" className="w-full">
              Contact Us
            </Button>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-8">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
