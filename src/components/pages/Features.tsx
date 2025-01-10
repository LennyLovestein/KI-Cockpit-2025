import React from "react";
import { Card } from "@/components/ui/card";
import { Code, Cpu, Zap, Shield, Sparkles, LineChart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Development",
      description: "Build with the latest technologies and best practices",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered",
      description: "Leverage artificial intelligence to enhance productivity",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance for the best user experience",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade security for your peace of mind",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Beautiful UI",
      description: "Stunning interfaces that users love",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Analytics",
      description: "Detailed insights into your application's performance",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
