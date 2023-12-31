import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Search } from "../Sections/Search";
import { DropdownLoggedIn, DropdownLoggedOut } from "../index";
import { useCart } from "../../context";

export const Header = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const [search, setSearch] = useState(false); // State to toggle search component
  const [dropDown, setDropdown] = useState(false); // State to toggle dropdown menu
  const token = JSON.parse(sessionStorage.getItem("token")); // Get token from session storage

  const { cartList } = useCart(); // Access cart list from context

  useEffect(() => {
    // Update local storage when dark mode state changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Apply or remove "dark" class to the root element based on dark mode state
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-dark dark:bg-white">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl text-gray-300 font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center relative">
            {/* Toggle dark mode */}
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl text-gray-300 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            {/* Toggle search component */}
            <span
              onClick={() => setSearch(!search)}
              className="cursor-pointer text-xl text-gray-300 dark:text-white mr-5 bi bi-search"
            ></span>
            {/* Link to cart */}
            <Link to="/cart" className="text-gray-300 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                {/* Display the number of items in the cart */}
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">
                  {cartList.length}
                </span>
              </span>
            </Link>
            {/* Toggle dropdown menu */}
            <span
              onClick={() => setDropdown(!dropDown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-300 dark:text-white"
            ></span>
            {/* Display dropdown menu based on authentication */}
            {dropDown && (token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />)}
          </div>
        </div>
      </nav>
      {/* Render search component if search state is true */}
      {search && <Search setSearch={setSearch} />}
    </header>
  );
};
