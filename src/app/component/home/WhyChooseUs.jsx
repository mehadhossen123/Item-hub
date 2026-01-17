import { FaStar, FaCheckCircle, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  const points = [
    {
      icon: <FaUsers size={30} className="text-blue-600" />,
      title: "Trusted by Thousands",
      description:
        "Our platform is trusted by over 10,000 satisfied customers worldwide.",
    },
    {
      icon: <FaCheckCircle size={30} className="text-blue-600" />,
      title: "Quality Assurance",
      description:
        "All products go through strict quality checks to ensure authenticity.",
    },
    {
      icon: <FaStar size={30} className="text-blue-600" />,
      title: "Top Rated Products",
      description:
        "We offer only the best products with excellent reviews and ratings.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition"
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
