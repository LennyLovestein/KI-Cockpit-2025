import HeroSection from "./landing/HeroSection";
import PartnersSection from "./landing/PartnersSection";
import PricingSection from "./landing/PricingSection";
import BlogSection from "./landing/BlogSection";

function Home() {
  return (
    <div className="w-screen min-h-screen">
      <HeroSection />
      <PartnersSection />
      <PricingSection />
      <BlogSection />
    </div>
  );
}

export default Home;
