import React, { useState } from "react";
import {
  FiMenu,
  FiSettings,
  FiEdit,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";

function MenuBar() {
  const [showSettingsInputs, setShowSettingsInputs] = useState(false);
  const [notchValue, setNotchValue] = useState(50);

  const handleSettingsClick = () => {
    setShowSettingsInputs(!showSettingsInputs);
  };

  const handleNotchClick = () => {
    const values = [50, 100, 150];
    const currentIndex = values.indexOf(notchValue);
    const nextIndex = (currentIndex + 1) % values.length;
    setNotchValue(values[nextIndex]);
  };

  return (
    <div className="bg-gray-900  py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <p className="text-white text-3xl mr-2 pl-10">
              Patient Name
            </p>
            <p className="text-blue-300 justify-end ">Patient ID</p>
          </div>
        </div>

        <div className="flex items-center">
          {/* Buttons */}
          <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mr-2">
            <FiEdit className="inline-block mr-1" />
            Annotation
          </button>
          <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mr-2">
            <FiFileText className="inline-block mr-1" />
            Report
          </button>
          <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mr-2">
            <FiCheckCircle className="inline-block mr-1" />
            Reviewed
          </button>
          <button
            onClick={handleSettingsClick}
            className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mr-2"
          >
            <FiSettings className="inline-block mr-1" />
            Settings
          </button>
        </div>
      </div>

      {/* Settings Inputs */}
      {showSettingsInputs && (
        <div
          className={`mx-auto mt-2 bg-gray-900 p-4 transition-all duration-500 rounded-lg`}
        >
          <div
            className={`container mx-auto mt-2 bg-gray-800 p-4 transition-all duration-500 rounded-lg`}
          >
            <div className="flex justify-between">
              <div className="flex flex-col mr-8">
                <label className="text-white mb-2">Display:</label>
                <input
                  type="number"
                  placeholder="Display"
                  className="px-4 py-2 rounded-lg mb-2"
                />
                <label className="text-white mb-2">Scale:</label>
                <input
                  type="number"
                  placeholder="Scale"
                  className="px-4 py-2 rounded-lg mb-2"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white mb-2">High Pass:</label>
                <input
                  type="text"
                  placeholder="High Pass"
                  className="px-4 py-2 rounded-lg mb-2"
                />
                <label className="text-white mb-2">Low Pass:</label>
                <input
                  type="text"
                  placeholder="Low Pass"
                  className="px-4 py-2 rounded-lg mb-2"
                />
              </div>
              
              <div className="flex items-center ml-auto">
                <div
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                  onClick={handleNotchClick}
                >
                  Notch: {notchValue} Hz
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuBar;
