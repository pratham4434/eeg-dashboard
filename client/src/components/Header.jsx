import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    comments: ""
  });

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const handleFeedbackModalOpen = () => {
    setIsFeedbackModalOpen(true);
  };

  const handleFeedbackModalClose = () => {
    setIsFeedbackModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setIsFeedbackModalOpen(false);
    // Reset form data
    setFormData({
      name: "",
      email: "",
      topic: "",
      comments: ""
    });
  };

  return (
    <>
      <nav className="bg-gray-800 shadow-lg">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center h-16">
            {/* Back Button */}
            <div className="flex items-center">
              <button className="text-white focus:outline-none ml-2">
                <FiArrowLeft className="h-6 w-6 mr-1 text-2xl" />
              </button>
              <h1 className="text-white text-2xl font-bold ml-2">Dashboard</h1>
            </div>

            {/* Nav Links */}
            <div className="flex items-center">
              <button
                onClick={handleFeedbackModalOpen}
                className="text-white mr-6 hover:text-gray-300 focus:outline-none"
              >
                Send Feedback
              </button>

              {/* Case Studies Dropdown */}
              <div
                className="relative "
                onMouseEnter={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
              >
                <button className="text-white hover:text-gray-300 focus:outline-none mr-4">
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

      {/* Feedback Modal */}
      {isFeedbackModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Send Feedback</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Topic:
                </label>
                <input
                  type="text"
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Comments:
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full h-32 resize-none"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                >
                  Submit
                </button>
                <button
                  onClick={handleFeedbackModalClose}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
