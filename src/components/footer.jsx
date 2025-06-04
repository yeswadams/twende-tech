import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Send } from "lucide-react";

const footer = () => {
  return (
    <footer className="mt-32 grid grid-cols-4 p-12 bg-gray-200">
      <div className="flex flex-col">
        <h3 className="mb-4 text-xl font-semibold">Navigation</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pathways</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
        <p>Email: info@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Tech Lane, Silicon Valley</p>
      </div>

      <div className="footer-section">
        <h3 className="mb-4 text-xl font-semibold">Our Socials</h3>
        <div className="flex flex-row space-x-4">
          <a href="https://facebook.com" target="_blank">
            <FaFacebook className="text-blue-600 w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram className="text-pink-500 w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin className="text-blue-700 w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="container">
        <h3 className="mb-4 text-xl font-semibold">Newsletter</h3>
        <p>Subscribe to our newsletter for updates.</p>
        <form className="flex items-center space-x-2 bg-gray-200 pt-2 rounded-md max-w-md mx-auto">
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
          >
            <Send />
          </button>
        </form>
      </div>

      <div className="flex justify-center items-center w-full mt-9">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default footer;
