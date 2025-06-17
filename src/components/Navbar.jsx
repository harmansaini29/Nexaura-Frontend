import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/college-school", label: "College/School" },
  { to: "/railways", label: "Railways" },
  { to: "/database", label: "Database" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-slate-900 sticky top-0 z-50 shadow-lg transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-sky-400 text-2xl font-bold tracking-wide"
        >
          NEXAURA
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative text-slate-300 hover:text-white px-3 py-1 transition duration-300 ${
                  isActive ? "text-sky-400 font-semibold" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full bg-sky-400 transition-transform duration-300 scale-x-0 ${
                      isActive ? "scale-x-100" : "group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 px-6 py-4">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-slate-200 py-2 px-3 rounded transition duration-300 ${
                  isActive ? "bg-sky-500 text-white" : "hover:bg-sky-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
