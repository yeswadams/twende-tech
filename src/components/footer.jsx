import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="flex flex-row md:flex-col gap-2">
      <div className="flex flex-col">
        <h3>Navigation</h3>
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
        <h3>Contact Information</h3>
        <p>Email: info@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Tech Lane, Silicon Valley</p>
      </div>

      <div className="footer-section">
        <h3>Our Socials</h3>
        <div className="social-icons">
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

      <div className="footer-section">
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter for updates.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default footer;
