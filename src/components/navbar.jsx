import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 h-16">
          <h3 className="text-2xl font-bold text-white">TwendeTech</h3>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-white font-medium text-sm sm:text-base bg-white/20 backdrop-blur-md border border-white/40 rounded-full px-6 py-2 shadow-md">
          {["/", "/about", "/programs", "/volunteer", "/partnerships"].map((path, idx) => {
            const labels = ["Home", "About", "Programs", "Volunteer", "Partnerships"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "hover:text-white/80"
                }
              >
                {labels[idx]}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Login */}
        <div className="hidden md:block ml-4">
          <NavLink to="/login">
            <button className="cursor-pointer bg-white text-black rounded-full px-5 py-2 shadow-md hover:bg-gray-100 flex items-center">
              <LogIn className="mr-2 h-4 w-4" />
              Log In
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-md border border-white/40 rounded-lg shadow-lg text-white px-6 pb-4 shadow-lg rounded-b-lg">
          <nav className="flex flex-col gap-3 text-base font-medium pt-4">
            {["/", "/about", "/programs", "/volunteer", "/partnerships"].map((path, idx) => {
              const labels = ["Home", "About", "Programs", "Volunteer", "Partnerships"];
              return (
                <NavLink key={path} to={path} onClick={toggleMenu}>
                  {labels[idx]}
                </NavLink>
              );
            })}
            <NavLink
              to="/login"
              onClick={toggleMenu}
              className="bg-black text-white rounded-full px-5 py-2 mt-2 flex items-center justify-center"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Log In
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
