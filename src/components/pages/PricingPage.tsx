import React from "react";
import PricingSection from "../landing/PricingSection";

const PricingPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Plans</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>
        <PricingSection />
      </div>
    </div>
  );
};

export default PricingPage;
