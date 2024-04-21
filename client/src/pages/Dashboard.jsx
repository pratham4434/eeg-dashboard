import React from "react";
import MenuBar from "../components/MenuBar";
import TimelineBar from "../components/TimelineBar";
import EEGChart from "../components/EEGChart";

function Dashboard() {
  return (
    <>
      <MenuBar />
      <TimelineBar highPass= "1Hz" lowPass="30Hz" notch="50Hz" duration="00:00:00/00:06:32"/>

      {/* //channelName="Fp1" */}
      <div className="flex flex-col">
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-300 w-[80px]">
            Fp1
          </div>
          <div className="w-full">
            <EEGChart channelName="Fp1" />
          </div>
        </div>

        {/* //channelName="Fp2" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-400 w-[80px]">
            Fp2
          </div>
          <div className="w-full">
            <EEGChart channelName="Fp2" />
          </div>
        </div>

        {/* //channelName="F3" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-300 w-[80px]">
            F3
          </div>
          <div className="w-full">
            <EEGChart channelName="F3" />
          </div>
        </div>

        {/* //channelName="F4" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-400 w-[80px]">
            F4
          </div>
          <div className="w-full">
            <EEGChart channelName="F4" />
          </div>
        </div>

        {/* //channelName="F7" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-300 w-[80px]">
            F7
          </div>

          <div className="w-full">
            <EEGChart channelName="F7" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
