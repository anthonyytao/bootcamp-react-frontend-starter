import React, { Component } from "react";
// import BottomBar from "./components/BottomBar";
import Map from "./components/Map";
// import TopBar from "./components/TopBar";

class UI extends Component {
  findCoordinates = () => {
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
        function success(position) {
          // for when getting location is a success
          console.log(
            "latitude",
            position.coords.latitude,
            "longitude",
            position.coords.longitude
          );
        },
        function error(error_message) {
          // for when getting location results in an error
          console.error(
            "An error has occured while retrieving location",
            error_message
          );
        }
      );
    } else {
      // geolocation is not supported
      // get your location some other way
      console.log("geolocation is not enabled on this browser");
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* <TopBar />
      <BottomBar /> */}
        <div style={{ width: "100%", height: "600px" }}>
          <Map />
        </div>
        <button onClick={() => this.findCoordinates()}>find coordinates</button>
      </React.Fragment>
    );
  }
}

export default UI;
