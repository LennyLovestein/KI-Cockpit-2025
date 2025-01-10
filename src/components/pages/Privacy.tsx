import React from "react";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from third-party sources.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and our users.",
    },
    {
      title: "Information Sharing",
      content:
        "We do not share your personal information with companies, organizations, or individuals outside of our company except in specific circumstances.",
    },
    {
      title: "Data Security",
      content:
        "We use industry-standard security measures to protect your personal information from unauthorized access, alteration, or destruction.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="p-8 mb-8">
          <p className="text-muted-foreground">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our services.
          </p>
        </Card>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="p-8">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-muted-foreground">{section.content}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:privacy@example.com"
              className="text-primary hover:underline"
            >
              privacy@example.com
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
