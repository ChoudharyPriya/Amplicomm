import { healthConcerns } from "@/data/products";

export default function ShopByHealthConcerns() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-left mb-12 text-gray-900">Shop by Health concerns</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {healthConcerns.map((concern) => (
            <div key={concern.id} className="text-center cursor-pointer group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 rounded-lg overflow-hidden bg-white shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src={concern.image}
                  alt={concern.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-primary transition-colors">
                {concern.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
