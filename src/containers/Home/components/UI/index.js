import React, { Component } from "react";
// import BottomBar from "./components/BottomBar";
import Map from "./components/Map";
// import TopBar from "./components/TopBar";

const UI = () => {
  return (
    <React.Fragment>
      {/* <TopBar />
      <BottomBar /> */}
      <div style={{ width: "100%", height: "600px" }}>
        <Map />
      </div>
    </React.Fragment>
  );
};
export default UI;
