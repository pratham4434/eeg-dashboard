import React from 'react';
import { FiPlay, FiPause, FiSkipForward } from 'react-icons/fi';

function TimelineBar({ duration, highPass, lowPass, notch }) {
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left */}
        <div className="flex items-center">
          <p className="text-white">{duration}</p>
        </div>

        {/* Middle (Play, Pause, Skip) */}
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"><FiPlay /></button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"><FiPause /></button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"><FiSkipForward /></button>
        </div>

        {/* Right (High Pass, Low Pass, Notch) */}
        <div className="flex items-center">
          <p className="text-white mr-4">High Pass: {highPass}</p>
          <p className="text-white mr-4">Low Pass: {lowPass}</p>
          <p className="text-white">Notch: {notch}</p>
        </div>
      </div>
    </div>
  );
}

export default TimelineBar;
