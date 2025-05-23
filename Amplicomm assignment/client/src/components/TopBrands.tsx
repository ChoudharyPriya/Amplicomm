import { brands } from "@/data/products";

export default function TopBrands() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-left mb-12 text-gray-900">Top Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} Logo`}
                className="h-12 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 mb-3"
              />
              <p className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors text-center">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
