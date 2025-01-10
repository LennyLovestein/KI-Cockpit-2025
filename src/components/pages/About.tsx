import React from "react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground">
            Building the future of web development
          </p>
        </div>

        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            We're on a mission to make web development more accessible,
            efficient, and enjoyable for developers worldwide. Our platform
            combines cutting-edge technology with intuitive design to streamline
            the development process.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground">
            Founded by developers for developers, we understand the challenges
            of modern web development. Our team brings together expertise from
            various backgrounds to create solutions that matter.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Innovation at the core</li>
              <li>• User-first approach</li>
              <li>• Continuous improvement</li>
              <li>• Community driven</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Quick Facts</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Founded in 2023</li>
              <li>• Global team</li>
              <li>• Open source contributor</li>
              <li>• 24/7 support</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
