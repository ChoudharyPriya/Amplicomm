import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  showDiscount?: boolean;
}

export default function ProductCard({ product, onAddToCart, showDiscount = false }: ProductCardProps) {
  const handleAddToCart = () => {
    console.log(`Adding ${product.name} to cart`);
    onAddToCart();
  };

  return (
    <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
      {showDiscount && product.discountPercentage && (
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
          {product.discountPercentage}% OFF
        </div>
      )}
      <CardContent className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
        <div className="mb-4">
          <span className="text-lg font-bold text-primary">Rs. {product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              Rs. {product.originalPrice}
            </span>
          )}
        </div>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-primary text-white hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
