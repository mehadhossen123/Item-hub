"use client";
import React, { useState } from "react";
import { addProduct } from "../action/server/product";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const AddItemPage = () => {
    const initialProduct = {
      name: "",
      description: "",
      fullDescription: "",
      price: "",
      originalPrice: "",
      rating: "",
      reviewsCount: "",
      sold: "",
      category: "",
      image: "",
      specs: {},
      faq: [{ question: "", answer: "" }],
    };
  const [product, setProduct] = useState(initialProduct);
 const router=useRouter()
  const categorySpecs = {
    Mobile: ["Storage", "RAM", "Display", "Battery", "Camera"],
    Laptop: ["Storage", "RAM", "Display", "Battery", "Processor", "GPU"],
    Mouse: ["DPI", "Buttons", "Wireless"],
    Keyboard: ["Type", "Backlight", "Connectivity"],
    Headphone: ["BatteryLife", "NoiseCancellation", "Connectivity"],
  };

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;

    // FAQ fields
    if (["question", "answer"].includes(name)) {
      const newFaq = [...product.faq];
      newFaq[index][name] = value;
      setProduct((prev) => ({ ...prev, faq: newFaq }));
    }
    // Normal fields
    else if (
      [
        "name",
        "description",
        "fullDescription",
        "price",
        "originalPrice",
        "rating",
        "reviewsCount",
        "sold",
        "image",
        "category",
      ].includes(name)
    ) {
      setProduct((prev) => ({
        ...prev,
        [name]: value,
        // Reset specs if category changes
        ...(name === "category" ? { specs: {} } : {}),
      }));
    }
    // Specs fields
    else {
      setProduct((prev) => ({
        ...prev,
        specs: { ...prev.specs, [name]: value },
      }));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
 const result =await  addProduct(product);
 if(result.success){
    Swal.fire('success','product added','success')
    router.push('/product')
    setProduct(initialProduct)
    
 }else{
    Swal.fire('error','Something went wrong','error')
 }
  };

  return (
    <div className="mt-20 max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* General Info */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Full Description</label>
          <textarea
            name="fullDescription"
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option value="">Select Category</option>
            {Object.keys(categorySpecs).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Dynamic Specs */}
        {product.category && (
          <div>
            <h2 className="text-xl font-semibold mt-4 mb-2">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              {categorySpecs[product.category].map((spec) => (
                <div key={spec}>
                  <label>{spec}</label>
                  <input
                    type="text"
                    name={spec}
                    onChange={handleChange}
                    className="border p-2 w-full rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Price & Ratings */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Price</label>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>
          <div>
            <label>Original Price</label>
            <input
              type="number"
              name="originalPrice"
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>
          <div>
            <label>Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>
          <div>
            <label>Reviews Count</label>
            <input
              type="number"
              name="reviewsCount"
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>
          <div>
            <label>Sold</label>
            <input
              type="number"
              name="sold"
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-semibold mt-4 mb-2">FAQ</h2>
        {product.faq.map((item, index) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              name="question"
              placeholder="Question"
              value={item.question}
              onChange={(e) => handleChange(e, index)}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              name="answer"
              placeholder="Answer"
              value={item.answer}
              onChange={(e) => handleChange(e, index)}
              className="border p-2 w-full rounded"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-primary cursor-pointer w-full text-white px-4 py-2 rounded mt-4"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;
