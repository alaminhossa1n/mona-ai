import { useState, useEffect } from "react";
import { FaLanguage } from "react-icons/fa";
import NavLogo from "./NavLogo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 transition-all duration-300 text-white font-bold py-4 w-full ${
        isScrolled ? "backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <NavLogo />

        <div className="flex space-x-12 items-center">
          <Link to={"/"} className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to={"/"} className="text-gray-300">
            Tools
          </Link>
          <Link to={"/"} className="text-gray-300">
            About Us
          </Link>
          <Link to={"/"} className="text-gray-300">
            Pricing
          </Link>
          <Link to={"/"} className="text-gray-300">
            FAQ
          </Link>
          <Link to={"/"} className="text-gray-300">
            Contact Us
          </Link>
          <div className="border-l-2 border-gray-100 h-5"></div>
          <div className="relative flex items-center">
            <p className="text-3xl">
              <FaLanguage />
            </p>
            <select
              className="bg-transparent text-white p-2 focus:outline-none"
              name="language"
              id="language"
            >
              <option className="bg-gray-800 text-white" value="English">
                English
              </option>
              <option className="bg-gray-800 text-white" value="Bengali">
                Bengali
              </option>
            </select>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <Link to={"/"} className="text-gray-300">
            Login
          </Link>
          <button className="px-3 py-2 border rounded-md border-primary-color">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
