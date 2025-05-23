import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@shared/schema";

interface DealOfTheDayProps {
  onAddToCart: () => void;
}

export default function DealOfTheDay({ onAddToCart }: DealOfTheDayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products/deals"],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || !products || products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, products.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products, itemsPerView]);

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Deal of the day</h2>
            <Button variant="link" className="text-primary font-semibold">Know more</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-80 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Deal of the day</h2>
            <Button variant="link" className="text-primary font-semibold">Know more</Button>
          </div>
          <p className="text-center text-gray-600">No deals available at the moment.</p>
        </div>
      </section>
    );
  }

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Deal of the day</h2>
          <Button variant="link" className="text-primary font-semibold hover:underline">
            Know more
          </Button>
        </div>
        <div className="relative" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="flex-shrink-0 px-2" style={{ width: `${100 / itemsPerView}%` }}>
                  <div className="h-full">
                    <ProductCard product={product} onAddToCart={onAddToCart} showDiscount={true} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Always show for carousel */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 shadow-lg hover:bg-white w-12 h-12 rounded-full z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 shadow-lg hover:bg-white w-12 h-12 rounded-full z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.max(1, Math.ceil(products.length / itemsPerView)) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  Math.floor(currentIndex / itemsPerView) === index ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
