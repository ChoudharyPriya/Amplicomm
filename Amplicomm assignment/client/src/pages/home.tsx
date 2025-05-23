import { useState } from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import TopBrands from "@/components/TopBrands";
import FeaturedProducts from "@/components/FeaturedProducts";
import CarePlan from "@/components/CarePlan";
import ProvenBestsellers from "@/components/ProvenBestsellers";
import ShopByHealthConcerns from "@/components/ShopByHealthConcerns";
import DealOfTheDay from "@/components/DealOfTheDay";
import ContentSection from "@/components/ContentSection";
import YouTubeSection from "@/components/YouTubeSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [cartCount, setCartCount] = useState(3);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-primary text-white text-center py-2 text-sm">
        <p>Worldwide Shipping - Duties and Taxes Prepaid</p>
      </div>

      <Header cartCount={cartCount} />
      <HeroCarousel />
      <TopBrands />
      <FeaturedProducts onAddToCart={handleAddToCart} />
      <CarePlan />
      <ProvenBestsellers />
      <ShopByHealthConcerns />
      <DealOfTheDay onAddToCart={handleAddToCart} />
      <ContentSection />
      <YouTubeSection />
      <Footer />
    </div>
  );
}
