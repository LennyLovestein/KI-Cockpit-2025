import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

const HeroSection = ({
  title = "Build Better Apps, Faster Than Ever",
  subtitle = "Experience the future of web development with our intuitive platform. Create, deploy, and scale your applications with unprecedented ease.",
  ctaText = "Get Started",
}: HeroSectionProps) => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="relative min-h-[800px] w-full overflow-hidden">
        <div className="relative pt-32 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              {title}
              <div className="relative mx-auto inline-block w-max mt-4">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500">
                  <span>Build the future.</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                  <span>Build the future.</span>
                </div>
              </div>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="group bg-white hover:bg-gray-100 text-gray-900 rounded-full px-8"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Modern Stack",
                description:
                  "Built with the latest technologies for optimal performance",
              },
              {
                title: "Developer Experience",
                description:
                  "Intuitive tools and workflows that developers love",
              },
              {
                title: "Enterprise Ready",
                description:
                  "Secure, scalable, and reliable for any size business",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
