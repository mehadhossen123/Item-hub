import { getSingleProduct } from "@/app/action/server/product";
import React from "react";

const SingleProductPage = async ({ params }) => {
  const { id } =await params;
  const product = await getSingleProduct(id);

  // Buy Now button handler
//   const handleBuyNow = () => {
//     alert(`You are buying: ${product.name} for ৳${product.price}`);
//     // ekhane tumi checkout page e navigate korte paro
//   };

  return (
    <div className="mt-20 flex justify-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-6">
        {/* Product Image */}
        <div className="flex justify-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-48 object-cover rounded-lg"
          />
        </div>

        {/* Product Name */}
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

        {/* Description */}
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-gray-600 mb-4">{product.fullDescription}</p>

        {/* Price */}
        <div className="flex items-center mb-4">
          <span className="text-xl font-semibold text-green-600 mr-2">
            ৳{product.price}
          </span>
          <span className="line-through text-gray-400">
            ৳{product.originalPrice}
          </span>
        </div>

        {/* Rating and sold */}
        <div className="flex items-center gap-4 mb-4">
          <span>
            ⭐ {product.rating} ({product.reviewsCount} reviews)
          </span>
          <span>Sold: {product.sold}</span>
        </div>

        {/* Category */}
        <p className="mb-4">
          <strong>Category:</strong> {product.category}
        </p>

        {/* Specs */}
        <div className="mb-4">
          <h2 className="font-semibold mb-2">Specifications:</h2>
          <ul className="list-disc list-inside">
            {Object.entries(product.specs).map(([key, value]) => (
              <li key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
                {value}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">FAQ:</h2>
          {product.faq.map((item, index) => (
            <div key={index} className="mb-2">
              <p className="font-medium">{item.question}</p>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Buy Now Button */}
        <div className="flex justify-center">
          <button
            // onClick={handleBuyNow}
            className="w-full bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
