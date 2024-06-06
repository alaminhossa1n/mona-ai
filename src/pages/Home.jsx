import Banner from "../components/Banner";
import Contact from "../components/Contact";
import FAQs from "../components/FAQs";
import Features from "../components/Features";
import HowToCreate from "../components/HowToCreate";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <Banner />
      <Features />
      <HowToCreate />
      <Pricing />
      <FAQs />
      <Contact />
    </div>
  );
};

export default Home;
