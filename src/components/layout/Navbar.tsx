import { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { CartSidebar } from "../shared/Drawer";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between py-2 mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-16" alt="Logo" />
        </a>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-400 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full lg:block lg:w-auto lg:mr-10`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col items-center p-4 mt-4 font-medium border rounded-lg lg:p-0 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded lg:p-0 ${
                    isActive ? "text-primary" : "text-secondary"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded lg:p-0 ${
                    isActive ? "text-primary" : "text-secondary"
                  }`
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded lg:p-0 ${
                    isActive ? "text-primary" : "text-secondary"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product-management"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded lg:p-0 ${
                    isActive ? "text-primary" : "text-secondary"
                  }`
                }
              >
                Product Management
              </NavLink>
            </li>

            <li>
              <CartSidebar />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
