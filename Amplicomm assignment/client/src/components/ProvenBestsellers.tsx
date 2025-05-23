import { categories } from "@/data/products";

export default function ProvenBestsellers() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-left mb-12 text-gray-900">Proven Bestsellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => {
            const gradients = [
              'from-orange-400 to-red-500',
              'from-blue-400 to-blue-600',
              'from-purple-400 to-purple-600',
              'from-green-400 to-green-600',
              'from-yellow-400 to-orange-500',
              'from-teal-400 to-teal-600'
            ];

            return (
              <div key={category.id} className="text-center cursor-pointer group">
                <div className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-full"
                  />
                </div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-primary transition-colors">
                  {category.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
