import React from "react";

interface PartnersSectionProps {
  title?: string;
  subtitle?: string;
  partners?: Array<{
    name: string;
    logo: string;
  }>;
}

const PartnersSection = ({
  title = "Trusted by Industry Leaders",
  subtitle = "Join thousands of companies that trust us with their business",
  partners = [
    {
      name: "TechCorp",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=TC&backgroundColor=00000f",
    },
    {
      name: "InnovateLabs",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=IL&backgroundColor=00000f",
    },
    {
      name: "FutureWorks",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=FW&backgroundColor=00000f",
    },
    {
      name: "DataFlow",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=DF&backgroundColor=00000f",
    },
    {
      name: "CloudNine",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=CN&backgroundColor=00000f",
    },
    {
      name: "SmartSys",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=SS&backgroundColor=00000f",
    },
  ],
}: PartnersSectionProps) => {
  // Double the partners array for seamless looping
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll space-x-16 whitespace-nowrap">
            {doubledPartners.map((partner, index) => (
              <div
                key={index}
                className="w-32 h-16 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
