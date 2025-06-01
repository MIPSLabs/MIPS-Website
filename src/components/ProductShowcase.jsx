// ProductShowcase.jsx
import React, { useState } from "react";
import demo from "../assets/demo1.jpg";
import image1 from "../assets/class1.jpg";
import image2 from "../assets/class2.jpg";
import image3 from "../assets/class3.jpg";

const ProductShowcase = () => {
  const productImages = [demo, image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const basePrice = 199.0; // price per single item
  const qty = Math.max(1, parseInt(quantity) || 1);
  const originalTotal = basePrice * qty;
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with your actual add‐to‐cart logic:
    console.log("Email:", email);
    console.log("Quantity:", quantity);
  };

  // Apply a flat 10% discount on the entire total only if quantity > 1
  const discountRate = qty > 1 ? 0.05 : 0;
  const discountedTotal = originalTotal * (1 - discountRate);

  const prevImage = () => {
    setCurrentIndex((idx) => (idx === 0 ? productImages.length - 1 : idx - 1));
  };

  const nextImage = () => {
    setCurrentIndex((idx) =>
      idx === productImages.length - 1 ? 0 : idx + 1
    );
  };

  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value);
    setQuantity(val > 0 ? val : 1);
  };

  return (
    <section
      id="product"
      className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row md:items-start items-center"
    >
      {/* Product Images */}
      <div className="md:w-1/2 w-full relative">
        <div className="relative w-full aspect-[4/3]">
          {/* Left Arrow Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-gray-100 bg-opacity-75 hover:bg-opacity-100 rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Main Image */}
          <img
            src={productImages[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow"
          />

          {/* Right Arrow Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-gray-100 bg-opacity-75 hover:bg-opacity-100 rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnails (4:3, smaller) */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 mt-4 justify-center">
          {productImages.map((src, idx) => (
            <div
              key={idx}
              className={`relative w-12 aspect-[4/3] rounded cursor-pointer overflow-hidden border ${
                idx === currentIndex
                  ? "border-blue-500 ring-2 ring-blue-300"
                  : "border-gray-200"
              }`}
              onClick={() => setCurrentIndex(idx)}
            >
              <img
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="md:w-1/2 w-full md:pl-8 mt-8 md:mt-0">
        <h2 className="text-2xl font-bold mb-2">MIPS Development Kit</h2>
        <p className="text-sm text-gray-600 mb-4"></p>

        {/* Pricing */}
        <div className="mb-4">
          <span className="text-xl font-semibold text-gray-800">
            ${discountedTotal.toFixed(2)}
          </span>
          {discountRate > 0 && (
            <>
              <span className="text-lg text-gray-500 line-through ml-3">
                ${originalTotal.toFixed(2)}
              </span>
              <span className="text-green-600 font-medium ml-3">
                Save ${(originalTotal - discountedTotal).toFixed(2)}
              </span>
            </>
          )}
        </div>

        <p className="mb-4 text-gray-800">
          Our goal is to educate by making fun projects using arduino and modular servos.{" "}
          <a
            href="/products/hunnyball-original"
            className="text-blue-600 underline ml-1"
          >
            Learn more
          </a>
        </p>

        {/* Quantity Input */}
        <div className="mb-6 flex items-center">
          <label className="mr-2 font-medium">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 text-center border border-gray-300 rounded"
          />
        </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Enter your email:
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
            placeholder="you@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-800 text-white font-semibold py-2 px-6 rounded"
        >
          Add Me to E-mail List
        </button>
      </form>
        
      </div>
    </section>
  );
};

export default ProductShowcase;
