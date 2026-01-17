import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Product Name */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h2>

        {/* Rating + Reviews + Sold */}
        <div className="flex items-center text-sm text-gray-500 mt-1 gap-2">
          <span className="text-yellow-500 font-bold">★ {product.rating}</span>
          <span>({product.reviewsCount} reviews)</span>
          <span>| {product.sold} sold</span>
        </div>

        {/* Price */}
        <div className="mt-2">
          <span className="text-lg font-bold text-red-600">
            ৳ {product.price}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm line-through text-gray-400 ml-2">
              ৳ {product.originalPrice}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <div className="mt-4">
          <Link href={`/product/${product._id}`}>
            <button className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
