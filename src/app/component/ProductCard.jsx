import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
      {/* Image Container */}
      <div className="relative  w-full overflow-hidden bg-gray-50 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Product Name */}
        <h2 className="text-md font-bold text-gray-800 line-clamp-2 h-12">
          {product.name}
        </h2>

        {/* Rating + Reviews */}
        <div className="flex items-center text-xs text-gray-500 mt-2 gap-2">
          <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-md">
            <span className="font-bold">★ {product.rating || "0.0"}</span>
          </div>
          <span>({product.reviewsCount || 0} reviews)</span>
          <span className="text-gray-300">|</span>
          <span>{product.sold || 0} sold</span>
        </div>

        {/* Price Section */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-black text-orange-600">
            ৳ {product.price}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm line-through text-gray-400">
              ৳ {product.originalPrice}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <div className="mt-auto pt-4">
          <Link href={`/product/${product._id}`}>
            <button className="w-full py-2.5 bg-primary text-white font-medium rounded-xl hover:bg-orange-600 active:scale-95 transition-all duration-200 shadow-md">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
