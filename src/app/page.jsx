import Categories from "./component/home/Categories";
import CTASection from "./component/home/CTASection";
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
      <div className="my-8">
        <Features></Features>
      </div>
      <div className="my-8">
      <Categories></Categories>
      </div>
      <div className="my-8">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div className="my-8">
        <Testimonials></Testimonials>
      </div>
      <div className="my-8">
      <CTASection></CTASection>
      </div>
    </div>
  );
}
