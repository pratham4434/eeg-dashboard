import React from "react";
import MenuBar from "../components/MenuBar";
import TimelineBar from "../components/TimelineBar";
import EEGChart from "../components/EEGChart";

function Dashboard() {
  return (
    <>
      <MenuBar />
      <TimelineBar
        highPass="1Hz"
        lowPass="30Hz"
        notch="50Hz"
        duration="00:00:00/00:06:32"
      />

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

        {/* //channelName="F8" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-400 w-[80px]">
            F8
          </div>
          <div className="w-full">
            <EEGChart channelName="F8" />
          </div>
        </div>

        {/* //channelName="T3" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-300 w-[80px]">
            T3
          </div>
          <div className="w-full">
            <EEGChart channelName="T3" />
          </div>
        </div>

        {/* //channelName="T4" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-400 w-[80px]">
            T4
          </div>
          <div className="w-full">
            <EEGChart channelName="T4" />
          </div>
        </div>

        {/* //channelName="C3" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-300 w-[80px]">
            C3
          </div>
          <div className="w-full">
            <EEGChart channelName="C3" />
          </div>
        </div>

        {/* //channelName="C4" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-400 w-[80px]">
            C4
          </div>
          <div className="w-full">
            <EEGChart channelName="C4" />
          </div>
        </div>

        {/* //channelName="T5" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-300 w-[80px]">
            T5
          </div>
          <div className="w-full">
            <EEGChart channelName="T5" />
          </div>
        </div>

        {/* //channelName="T6" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-400 w-[80px]">
            T6
          </div>
          <div className="w-full">
            <EEGChart channelName="T6" />
          </div>
        </div>

        {/* //channelName="P3" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-300 w-[80px]">
            P3
          </div>
          <div className="w-full">
            <EEGChart channelName="P3" />
          </div>
        </div>

        {/* //channelName="P4" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-400 w-[80px]">
            P4
          </div>
          <div className="w-full">
            <EEGChart channelName="P4" />
          </div>
        </div>

        {/* //channelName="O1" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-300 w-[80px]">
            O1
          </div>
          <div className="w-full">
            <EEGChart channelName="O1" />
          </div>
        </div>

        {/* //channelName="O2" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-400 w-[80px]">
            O2
          </div>
          <div className="w-full">
            <EEGChart channelName="O2" />
          </div>
        </div>

        {/* //channelName="Fz" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-300 w-[80px]">
            Fz
          </div>
          <div className="w-full">
            <EEGChart channelName="Fz" />
          </div>
        </div>

        {/* //channelName="Cz" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-400 w-[80px]">
            Cz
          </div>
          <div className="w-full">
            <EEGChart channelName="Cz" />
          </div>
        </div>

        {/* //channelName="Pz" */}
        <div className="flex flex-row flex-shrink">
          <div className="flex text-2xl items-center justify-center rounded-md rounded-tl-none rounded-bl-none bg-gray-300 w-[80px]">
            Pz
          </div>
          <div className="w-full">
            <EEGChart channelName="Pz" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
