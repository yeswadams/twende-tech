import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent align-middle">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 h-16">
          <div className="flex items-center h-full">
            <h3 className="text-2xl font-bold text-white">TwendeTech</h3>
          </div>
        </div>

        {/* Desktop Nav Menu */}
        <nav className="hidden md:flex items-center gap-6 text-white font-medium text-sm sm:text-base bg-white/20 backdrop-blur-md border border-white/40 rounded-full px-6 py-2 shadow-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-white/80"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-white/80"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/programs"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-white/80"
            }
          >
            Programs
          </NavLink>
          <NavLink
            to="/volunteer"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-white/80"
            }
          >
            Volunteer
          </NavLink>
          <NavLink
            to="/partnerships"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-white/80"
            }
          >
            Partnerships
          </NavLink>
        </nav>

        {/* Log In Button (Desktop Only) */}
        <div className="hidden md:block ml-4">
          <NavLink to="/login">
            <button className="bg-white text-black rounded-full px-5 py-2 shadow-md hover:bg-gray-100 flex items-center">
              <LogIn className="mr-2 h-4 w-4" />
              Log In
            </button>
          </NavLink>
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
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/programs" onClick={toggleMenu}>
              Programs
            </Link>
            <Link to="/volunteer" onClick={toggleMenu}>
              Volunteer
            </Link>
            <Link to="/partnerships" onClick={toggleMenu}>
              Partnerships
            </Link>
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
