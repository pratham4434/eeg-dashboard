import React from "react";
import MenuBar from "../components/MenuBar";
import TimelineBar from "../components/TimelineBar";
import EEGChart from "../components/EEGChart";

function Dashboard() {
  return (
    <>
      <MenuBar />
      <TimelineBar />
      <EEGChart />
    </>
  );
}

export default Dashboard;
