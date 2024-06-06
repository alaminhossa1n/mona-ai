import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import footerLogo from "../assets/footer-logo.png";
import cardImg from "../assets/card.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* column 1 */}
          <div>
            <img src={footerLogo} alt="Footer Logo" className="mb-4" />
            <p className="text-gray-400">
              Step into the realm of cutting-edge video enhancement with our
              AI-driven subtitle tool, revolutionizing content accessibility.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/">Home</a>
              </li>
              <li className="mb-2">
                <a href="/">About us</a>
              </li>
              <li className="mb-2">
                <a href="/">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="/">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="/">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/">Terms and Policy</a>
              </li>
              <li className="mb-2">
                <a href="/">Tools</a>
              </li>
            </ul>
          </div>

          {/* column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/">AI Video Subtitles</a>
              </li>
              <li className="mb-2">
                <a href="/">YouTube Translation</a>
              </li>
              <li className="mb-2">
                <a href="/">Images Generation</a>
              </li>
              <li className="mb-2">
                <a href="/">Chatroom</a>
              </li>
              <li className="mb-2">
                <a href="/">AI Assistant</a>
              </li>
            </ul>
          </div>

          {/* column 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Hauptstraesse 25 -8840 Einsiedeln</li>
              <li className="mb-2">
                <a href="mailto:info@doseba.com">info@doseba.com</a>
              </li>
              <li className="mb-2">+91 729 096-3676</li>
            </ul>
          </div>
        </div>
        <div className="border-t flex justify-between items-center py-5">
          <p>Copyright © 2024 MAZAL.AI . All rights reserved.</p>
          <img src={cardImg} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
