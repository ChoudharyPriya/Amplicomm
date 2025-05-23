import { Button } from "@/components/ui/button";

export default function CarePlan() {
  return (
    <section className="py-16 gradient-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Care Plan now starting at Rs. 165 for 3 months</h2>
        <p className="text-xl mb-6 opacity-90">Get extra 5% saving on your orders. Free shipping, same-day delivery and more.</p>
        <p className="text-lg mb-8">Become a member today!</p>
        <Button 
          size="lg"
          className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Know more
        </Button>
      </div>
    </section>
  );
}
