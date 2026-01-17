import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r rounded-xl from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Explore Our Products?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join thousands of happy customers. Sign up today and start your
          journey with us!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/register"
            className=" btn-primary btn bg-primary font-semibold px-6 py-3 rounded-lg shadow-lg"
          >
            Sign Up Now
          </Link>
          <Link
            href="/product"
            className="btn btn-outline font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
