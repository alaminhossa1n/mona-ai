import Banner from "../components/Banner";
import Contact from "../components/Contact";
import FAQs from "../components/FAQs";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner />
      <FAQs />
      <Contact />
    </div>
  );
};

export default Home;
