import React, { Component } from "react";
import BottomBar from "./components/BottomBar";
import Map from "./components/Map";
// import TopBar from "./components/TopBar";

class UI extends Component {
  constructor() {
    super();
    this.state = {
      lat: 42.375,
      lng: -71.1167,
      zoom: 15.2
    };
  }

  findCoordinates = () => {
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
        position => {
          // for when getting location is a success
          console.log(
            "latitude",
            position.coords.latitude,
            "longitude",
            position.coords.longitude
          );
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.setState({ lat: lat, lng: lng });
        },
        error_message => {
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
        {/* <TopBar /> */}
        <div style={{ width: "100%", height: "600px" }}>
          <Map
            lat={this.state.lat}
            lng={this.state.lng}
            zoom={this.state.zoom}
            findCoordinates={this.findCoordinates}
          />
        </div>
        <BottomBar findCoordinates={this.findCoordinates} />
      </React.Fragment>
    );
  }
}

export default UI;
