import React from "react";
import PricingCard from "./PricingCard";

interface PricingPlan {
  title: string;
  price: string;
  period: string;
  features: Array<{ name: string; included: boolean }>;
  isRecommended: boolean;
  ctaText: string;
}

interface PricingSectionProps {
  title?: string;
  description?: string;
  plans?: PricingPlan[];
}

const PricingSection = ({
  title = "Simple, Transparent Pricing",
  description = "Choose the perfect plan for your needs. No hidden fees, no surprises.",
  plans = [
    {
      title: "Starter",
      price: "$9",
      period: "month",
      features: [
        { name: "Basic Features", included: true },
        { name: "Email Support", included: true },
        { name: "1 User", included: true },
        { name: "Analytics", included: false },
        { name: "Custom Domain", included: false },
      ],
      isRecommended: false,
      ctaText: "Start Free Trial",
    },
    {
      title: "Professional",
      price: "$29",
      period: "month",
      features: [
        { name: "All Starter Features", included: true },
        { name: "Priority Support", included: true },
        { name: "5 Users", included: true },
        { name: "Analytics", included: true },
        { name: "Custom Domain", included: true },
      ],
      isRecommended: true,
      ctaText: "Get Started",
    },
    {
      title: "Enterprise",
      price: "$99",
      period: "month",
      features: [
        { name: "All Pro Features", included: true },
        { name: "24/7 Support", included: true },
        { name: "Unlimited Users", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Multiple Domains", included: true },
      ],
      isRecommended: false,
      ctaText: "Contact Sales",
    },
  ],
}: PricingSectionProps) => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              isRecommended={plan.isRecommended}
              ctaText={plan.ctaText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
