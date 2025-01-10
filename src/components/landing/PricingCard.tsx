import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title?: string;
  price?: string;
  period?: string;
  features?: PricingFeature[];
  isRecommended?: boolean;
  ctaText?: string;
}

const PricingCard = ({
  title = "Basic Plan",
  price = "$10",
  period = "month",
  features = [
    { name: "Basic Features", included: true },
    { name: "Email Support", included: true },
    { name: "Custom Domain", included: false },
    { name: "Analytics", included: false },
  ],
  isRecommended = false,
  ctaText = "Get Started",
}: PricingCardProps) => {
  return (
    <Card
      className={`w-[350px] h-[500px] p-6 bg-white transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${isRecommended ? "border-2 border-primary" : ""}`}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Recommended
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-center justify-center gap-1">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check
              className={`w-5 h-5 ${feature.included ? "text-primary" : "text-muted-foreground/50"}`}
            />
            <span
              className={
                feature.included ? "text-foreground" : "text-muted-foreground"
              }
            >
              {feature.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <Button
          className="w-full"
          variant={isRecommended ? "default" : "outline"}
        >
          {ctaText}
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;
