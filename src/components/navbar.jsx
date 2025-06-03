import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import logo from '../assets/logo.png';
import Login from "../pages/authPage"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-auto h-15 overflow-hidden">
            <img
              src={logo}
              alt="TwendeTech Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Nav Menu */}
        <nav className="hidden md:flex items-center gap-6 text-white font-medium text-sm sm:text-base bg-white/20 backdrop-blur-md border border-white/40 rounded-full px-6 py-2 shadow-md">
          <Link to="/" className="hover:text-white/80">Home</Link>
          <Link to="/about" className="hover:text-white/80">About</Link>
          <Link to="/programs" className="hover:text-white/80">Programs</Link>
          <Link to="/volunteer" className="hover:text-white/80">Volunteer</Link>
          <Link to="/partnerships" className="hover:text-white/80">Partnerships</Link>
        </nav>

        {/* Log In Button (Desktop Only) */}
        <div className="hidden md:block ml-4">
 <Link to="/login">
 <button className="bg-white text-black rounded-full px-5 py-2 shadow-md hover:bg-gray-100 flex items-center">
 <LogIn className="mr-2 h-4 w-4" />
 Log In
 </button>
 </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-6 pb-4 shadow-lg rounded-b-lg">
          <nav className="flex flex-col gap-3 text-base font-medium pt-4">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/programs" onClick={toggleMenu}>Programs</Link>
            <Link to="/volunteer" onClick={toggleMenu}>Volunteer</Link>
            <Link to="/partnerships" onClick={toggleMenu}>Partnerships</Link>
 <Link
 to="/login"
 onClick={toggleMenu}
 className="bg-black text-white rounded-full px-5 py-2 mt-2 flex items-center justify-center"
 >
 <LogIn className="mr-2 h-4 w-4" />
 Log In
 </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
