import React, { useState } from "react";
import {
  FiSettings,
  FiEdit,
  FiFileText,
  FiCheckCircle,
  FiCheck,
  FiX,
  FiXCircle,
} from "react-icons/fi";

function MenuBar() {
  const [isReviewed, setIsReviewed] = useState(false);
  const [showSettingsInputs, setShowSettingsInputs] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [notchValue, setNotchValue] = useState(50);
  const [filters, setFilters] = useState([
    { name: "All", checked: false },
    { name: "Sonification", checked: false },
    { name: "Impedance", checked: false },
    { name: "Bedside", checked: false },
    { name: "Reviewer", checked: false },
  ]);
  const [impressions, setImpressions] = useState("Initial impressions...");
  const [comments, setComments] = useState("Initial comments...");
  const [editImpressions, setEditImpressions] = useState(false);
  const [editComments, setEditComments] = useState(false);
  const [newImpressions, setNewImpressions] = useState("");
  const [newComments, setNewComments] = useState("");

  const handleSettingsClick = () => {
    setShowSettingsInputs(!showSettingsInputs);
  };

  const handleNotchClick = () => {
    const values = [50, 100, 150];
    const currentIndex = values.indexOf(notchValue);
    const nextIndex = (currentIndex + 1) % values.length;
    setNotchValue(values[nextIndex]);
  };

  const handleFilterToggle = (index) => {
    const updatedFilters = [...filters];
    updatedFilters[index].checked = !updatedFilters[index].checked;
    setFilters(updatedFilters);
  };

  const handleAnnotationsClick = () => {
    setModalContent("annotations");
    setShowModal(true);
  };

  const handleReviewToggle = () => {
    setModalContent("review");
    setShowModal(true);
  };

  const handleReportClick = () => {
    setModalContent("report");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmReviewChange = (confirmed) => {
    if (confirmed) {
      setIsReviewed(!isReviewed);
    }
    setShowModal(false);
  };

  const handleEditImpressions = () => {
    setEditImpressions(true);
  };

  const handleEditComments = () => {
    setEditComments(true);
  };

  const handleSaveImpressions = () => {
    setImpressions(newImpressions);
    setEditImpressions(false);
  };

  const handleSaveComments = () => {
    setComments(newComments);
    setEditComments(false);
  };

  return (
    <div className="bg-gray-900  py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex ">
          <div className="flex px-4">
            <p className="text-white text-2xl ml-4 mr-2 pt-4 pb-1">
              Healthy Patient
            </p>
            <div className="flex flex-col justify-end">
              <p className="text-blue-300 pb-1">Patient ID</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {/* Buttons */}
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mr-2"
            onClick={handleAnnotationsClick}
          >
            <FiEdit className="inline-block mr-1" />
            Annotation
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mr-2"
            onClick={handleReportClick}
          >
            <FiFileText className="inline-block mr-1" />
            Report
          </button>
          {isReviewed ? (
            <button
              onClick={handleReviewToggle}
              className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mr-2"
            >
              <FiCheckCircle className="inline-block mr-1" />
              Reviewed
            </button>
          ) : (
            <button
              onClick={handleReviewToggle}
              className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded-lg mr-2"
            >
              <FiXCircle className="inline-block mr-1" />
              Not Reviewed
            </button>
          )}
          <button
            onClick={handleSettingsClick}
            className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mr-4 "
          >
            <FiSettings className="inline-block mr-1" />
            Settings
          </button>
        </div>
      </div>

      {/* Settings Inputs */}
      {showSettingsInputs && (
        <div className="mx-auto mt-2 bg-gray-900 p-4 transition-all duration-500 rounded-lg">
          <div className="container mx-auto mt-2 bg-gray-800 p-4 transition-all duration-500 rounded-lg">
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-gray-900 bg-opacity-75 absolute inset-0"></div>
          <div className="bg-white rounded-lg p-4 w-1/2 z-50">
            {modalContent === "annotations" && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 rounded-lg mr-2 w-1/2"
                  />
                  {/* Dummy Filters */}
                  {filters.map((filter, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-3xl outline outline-1 mr-2 flex items-center ${
                        filter.checked ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleFilterToggle(index)}
                    >
                      {filter.checked && <FiCheck className="mr-1" />}
                      {filter.name}
                    </button>
                  ))}
                </div>
                {/* List of Annotations */}
                <div>
                  <div className="flex justify-between border-b py-2">
                    <p>Sonify Left Hemisphere</p>
                    <p>4/22/2024, 3:48:54 AM</p>
                    <p>Tagged on device</p>
                  </div>
                  <div className="flex justify-between border-b py-2">
                    <p>Sonify Right Hemisphere</p>
                    <p>4/22/2024, 3:48:54 AM</p>
                    <p>Tagged on device</p>
                  </div>
                
                </div>
                <button className="mt-4 bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg">
                  Add Annotation
                </button>
              </>
            )}
            {modalContent === "review" && (
              <>
                <p>Are you sure you want to change the review status?</p>
                <div className="flex justify-end mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mr-2"
                    onClick={() => confirmReviewChange(true)}
                  >
                    Yes
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded-lg"
                    onClick={() => confirmReviewChange(false)}
                  >
                    No
                  </button>
                </div>
              </>
            )}
            {modalContent === "report" && (
              <>
                {/* Content for report modal */}
                <div className="mb-4">
                  <p className="font-bold">Patient Name:</p>
                  <p>John Doe</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold">Patient ID:</p>
                  <p>PAT123456</p>
                </div>
                {/* Add more details here */}
                <div className="mb-4">
                  <p className="font-bold">Impressions:</p>
                  {editImpressions ? (
                    <>
                      <input
                        type="text"
                        value={newImpressions}
                        onChange={(e) => setNewImpressions(e.target.value)}
                        className="border px-2 py-1 rounded-lg mb-2"
                      />
                      <button
                        className="bg-blue-500 text-white px-4 py-1 rounded-lg"
                        onClick={handleSaveImpressions}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <p>
                        {impressions}{" "}
                        <button
                          className="ml-2 px-2 py-1 bg-blue-500 text-white rounded-lg"
                          onClick={handleEditImpressions}
                        >
                          Edit
                        </button>
                      </p>
                    </>
                  )}
                </div>
                <div className="mb-4">
                  <p className="font-bold">Comments:</p>
                  {editComments ? (
                    <>
                      <input
                        type="text"
                        value={newComments}
                        onChange={(e) => setNewComments(e.target.value)}
                        className="border px-2 py-1 rounded-lg mb-2"
                      />
                      <button
                        className="bg-blue-500 text-white px-4 py-1 rounded-lg"
                        onClick={handleSaveComments}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <p>
                        {comments}{" "}
                        <button
                          className="ml-2 px-2 py-1 bg-blue-500 text-white rounded-lg"
                          onClick={handleEditComments}
                        >
                          Edit
                        </button>
                      </p>
                    </>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
            <button className="absolute top-4 right-4" onClick={closeModal}>
              <FiX className="text-white text-3xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuBar;
