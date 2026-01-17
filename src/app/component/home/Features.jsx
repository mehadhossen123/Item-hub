import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadphones,
  FaCheckCircle,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaShippingFast size={30} className="text-blue-600" />,
      title: "Fast Delivery",
      description:
        "Get your products delivered quickly with reliable shipping partners.",
    },
    {
      icon: <FaShieldAlt size={30} className="text-blue-600" />,
      title: "Secure Payment",
      description:
        "100% secure payment with multiple payment options available.",
    },
    {
      icon: <FaHeadphones size={30} className="text-blue-600" />,
      title: "24/7 Support",
      description:
        "Our team is available anytime to assist you with your needs.",
    },
    {
      icon: <FaCheckCircle size={30} className="text-blue-600" />,
      title: "Quality Products",
      description:
        "We ensure authentic and high-quality products for every customer.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Shop <span className="text-primary">With</span> Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
