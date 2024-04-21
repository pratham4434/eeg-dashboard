import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };
  return (
    <>
      <nav className="bg-gray-800 shadow-lg">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center h-16">
            {/* Back Button */}
            <div className="flex items-center">
              <button className="text-white focus:outline-none">
                <FiArrowLeft className="h-6 w-6 mr-1 text-2xl" />
              </button>
              <h1 className="text-white text-2xl font-bold ml-2">Dashboard</h1>
            </div>

            {/* Nav Links */}
            <div className="flex items-center">
              <a href="#" className="text-white mr-6 hover:text-gray-300">
                Send Feedback
              </a>

              {/* Case Studies Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
              >
                <button className="text-white hover:text-gray-300 focus:outline-none">
                  Case Studies
                  <BiChevronDown className="inline-block ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-gray-700 rounded-lg py-2 mt-1 w-32 z-10">
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                    >
                      Case Study 1
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                    >
                      Case Study 2
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                    >
                      Case Study 3
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
