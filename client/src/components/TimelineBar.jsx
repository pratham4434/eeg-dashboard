import React, { useState } from "react";
import { FiPlay, FiPause, FiSkipForward, FiSkipBack, FiFastForward, FiRewind } from "react-icons/fi";

function TimelineBar({ highPass, lowPass, notch , duration}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    // skip forward logic likho
  };

  const handleSkipBackward = () => {
    // skip backward logic likho
  };

  const handleSkipToBeginning = () => {
    // skip to beginning logic likho
  };

  const handleSkipToEnd = () => {
    // skip to end logic likho
  };

  // Get current date and time 
  const currentDateTime = new Date().toLocaleString();

  return (
    <div className="bg-gray-500 text-black py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left */}
        <div className="flex flex-col ">
          <p className="text-white text-lg font-semibold ml-8">{currentDateTime}</p>
          <p className="text-black  font-thin ml-8">{duration}</p>
          
        </div>

        {/* Middle (Skip to beginning, Skip backward, Play/Pause, Skip forward, Skip to end) */}
        <div className="flex items-center">
          <button className="text-2xl text-white px-4 py-2 mr-2" onClick={handleSkipToBeginning}>
            <FiRewind />
          </button>
          <button className="text-2xl text-white px-4 py-2 mr-2" onClick={handleSkipBackward}>
            <FiSkipBack />
          </button>
          <button className="text-4xl text-white px-4 py-2 mr-2" onClick={togglePlayPause}>
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>
          <button className="text-2xl text-white px-4 py-2 mr-2" onClick={handleSkipForward}>
            <FiSkipForward />
          </button>
          <button className="text-2xl text-white px-4 py-2" onClick={handleSkipToEnd}>
            <FiFastForward />
          </button>
        </div>

        {/* Right (High Pass, Low Pass, Notch) */}
        <div className="flex flex-col items-end">
          <p className="text-white mb-1">High Pass: {highPass}</p>
          <p className="text-white mb-1">Low Pass: {lowPass}</p>
          <p className="text-white">Notch: {notch}</p>
        </div>
      </div>
    </div>
  );
}

export default TimelineBar;
