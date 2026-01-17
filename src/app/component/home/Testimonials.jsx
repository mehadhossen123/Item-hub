"use client";

import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample testimonials array
const testimonials = [
  {
    name: "John Doe",
    image: "https://i.ibb.co.com/VcWMzt1g/e8098a3d487b4fd7b8d591d7d9db32bb.jpg",
    review: "Amazing products and fast delivery! Highly recommended.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: "https://i.ibb.co.com/1JmCNNwq/fcaf7aec4b7be05a0d062eff7851d2aa.jpg",
    review: "Great quality and excellent support. Will buy again!",
    rating: 4,
  },
  {
    name: "Alex Johnson",
    image: "https://i.ibb.co.com/Fqjg8V9c/6ad157c8278e090a7151341adc8eaaa6.jpg",
    review: "Very satisfied with my purchase. Highly trustworthy site.",
    rating: 5,
  },
  {
    name: "Mike Ross",
    image: "https://i.ibb.co.com/gZXr33Yj/3bdcc80371440f882d1291ebea360e67.jpg", // replace with real placeholder
    review: "Great quality and excellent support. Will buy again!",
    rating: 4,
  },
  {
    name: "John Doe",
    image: "https://i.ibb.co.com/VcWMzt1g/e8098a3d487b4fd7b8d591d7d9db32bb.jpg",
    review: "Amazing products and fast delivery! Highly recommended.",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 1 testimonial per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // hide prev/next arrows
    pauseOnHover: true,
  };

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          What Our <span className="text-primary"> Customers</span> Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-8 border rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-white"
            >
              <div className="w-20 h-20 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full border-2 border-blue-600"
                />
              </div>
              <p className="text-gray-600 mb-4">{item.review}</p>
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <div className="flex gap-1 justify-center">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
