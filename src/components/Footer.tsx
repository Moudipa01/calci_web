import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import CompanyLogo from "../assets/comIcon.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-8 md:mb-0">
            <a
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <img src={CompanyLogo.src} alt="Company Logo" className="ml-2" style={{ width: '199px', height: '65px' }} />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              className="bg-gray-800 text-gray-400 py-2 px-4 rounded-full outline-none"
            />
            <button className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Contact us</h4>
            <ul>
              <li className="mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-teal-300" />
                info@techlanz.com
              </li>
              <li className="mb-2 flex items-center">
                <FaPhoneAlt className="mr-2 text-teal-300" />
                +91 9047116404
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-teal-300" />
                HSR, Bangalore Karnataka
              </li>
            </ul>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Techlanz</h4>
            <ul>
              <li className="mb-2">About us</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Privacy policy</li>
              <li>Terms & conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul>
              <li className="mb-2">Courses</li>
              <li className="mb-2">Services</li>
              <li>Products & Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul>
              <li className="mb-2">Community</li>
              <li className="mb-2">Articles</li>
              <li className="mb-2">Webinars</li>
              <li>Case studies</li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-gray-500">
          Techlanz © 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
