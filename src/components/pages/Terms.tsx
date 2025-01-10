import React from "react";
import { Card } from "@/components/ui/card";

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
    },
    {
      title: "Use License",
      content:
        "Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.",
    },
    {
      title: "Disclaimer",
      content:
        "The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      title: "Limitations",
      content:
        "In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="p-8 mb-8">
          <p className="text-muted-foreground">
            Please read these terms of service carefully before using our
            website. By using our service, you agree to be bound by these terms.
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
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-muted-foreground">
            Questions about the Terms of Service should be sent to us at{" "}
            <a
              href="mailto:legal@example.com"
              className="text-primary hover:underline"
            >
              legal@example.com
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
