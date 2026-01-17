import { getAllProduct } from "../action/server/product";

const { default: ProductCard } = require("../component/ProductCard");

const ProductPage = async () => {
  const products = await getAllProduct();

  return (
    <div className="mt-20 w-11/12 mx-auto ">
      <h1 className="font-bold text-2xl md:text-4xl text-center my-10">
        Available Items <span className="text-primary">{products.length}</span>
      </h1>
      {/* Added gap and more breakpoints */}
      <div className=" grid md:grid-cols-4 gap-5 sm:grid-cols-3 grid-cols-2">
       {products.map((product)=><ProductCard product={product} key={product._id.toString()}></ProductCard>)}
      </div>

    </div>
  );
};
export default ProductPage
