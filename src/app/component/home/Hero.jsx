
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div
        className="container mx-auto px-6 grid grid-cols-1 reverse
       md:grid-cols-2 gap-10 items-center"
      >
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover <span className="text-primary"> Premium</span> <br /> Electronics Products
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Shop the latest smartphones, laptops, headphones, and accessories at
            unbeatable prices. Quality products with reliable service.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/product"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium  transition"
            >
              Browse Products
            </Link>

            <Link
              href="/item"
              className="border border-blue-600 btn-outline text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
            >
              Add item
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[350px] md:h-[420px]">
          <img
            src="/assets/hero.jpeg"
            alt=""
            className="md:h-[500px] w-full h-[400px] object-center "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
