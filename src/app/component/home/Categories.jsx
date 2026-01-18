import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  const categories = [
    {
      name: "Mobile",
      image:
        "https://i.ibb.co.com/d4xqvfZk/d51b0d8826063f245dc38e9ff6c5c263.jpg",
    },
    {
      name: "Laptop",
      image:
        "https://i.ibb.co.com/Q3dPzdPP/fef7b3cbaeb59afc974ab04dd20741e6.jpg",
    },
    {
      name: "Headphone",
      image:
        "https://i.ibb.co.com/nNDQ7NgT/a8337f50ffaf22a9f4c350ed63362ec8.jpg",
    },
    {
      name: "Keyboard",
      image:
        "https://i.ibb.co.com/5hPFM7tY/31223a1e55287bfca72bccb2740f943d.jpg",
    },
    {
      name: "Mouse",
      image:
        "https://i.ibb.co.com/jjDhjkM/4e72334416fcc053e11b915c775f12a8.jpg",
    },
  ];

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Explore <span className="text-primary">By</span> Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((cat, idx) => (
            <Link
              href={""}
              key={idx}
              className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-lg transition"
            >
              <div className="relative w-24 h-24 mb-4">
                <img
                  src={cat.image}
                  className="object-cover rounded-lg"
                  alt=""
                />
              </div>
              <h3 className="text-lg font-semibold">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
