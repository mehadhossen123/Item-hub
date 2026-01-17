import Categories from "./component/home/Categories";
import Features from "./component/home/Features";
import Hero from "./component/home/Hero";
import Testimonials from "./component/home/Testimonials";
import WhyChooseUs from "./component/home/WhyChooseUs";


export default function Home() {
  return (
    <div className="">
      <div>
        <Hero></Hero>
      </div>
      <div className="my-5">
        <Features></Features>
      </div>
      <div className="my-5">
      <Categories></Categories>
      </div>
      <div className="my-5">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div className="my-5">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}
