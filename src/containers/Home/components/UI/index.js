import React, { Component } from "react";
import BottomBar from "./components/BottomBar";
import Map from "./components/Map";
import TopBar from "./components/TopBar";

const positions = [
  { lat: 42.372042, lng: -71.118454 },
  { lat: 42.367, lng: -71.12 },
  { lat: 42.371, lng: -71.117 },
  { lat: 42.373, lng: -71.117 }
];

class UI extends Component {
  constructor() {
    super();
    this.state = {
      lat: 42.375,
      lng: -71.1167,
      zoom: 15.2,
      options: {
        radius: 10,
        opacity: 0.5
      }
    };
  }

  findCoordinates = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(
            "latitude",
            position.coords.latitude,
            "longitude",
            position.coords.longitude
          );
          console.log(this.state);
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error_message => {
          console.error(
            "An error has occured while retrieving location",
            error_message
          );
        }
      );
    } else {
      console.log("geolocation is not enabled on this browser");
    }
  };

  //   pushCoordinates = () => {
  //     if ("geolocation" in navigator) {
  //       navigator.geolocation.getCurrentPosition(
  //         position => {
  //           console.log(
  //             "latitude",
  //             position.coords.latitude,
  //             "longitude",
  //             position.coords.longitude
  //           );
  //           this.setState({
  //             positions: [
  //               ...this.state.positions,
  //               { lat: position.coords.latitude, lng: position.coords.longitude }
  //             ]
  //           });
  //         },
  //         error_message => {
  //           console.error(
  //             "An error has occured while retrieving location",
  //             error_message
  //           );
  //         }
  //       );
  //     } else {
  //       console.log("geolocation is not enabled on this browser");
  //     }
  //   };

  render() {
    return (
      <React.Fragment>
        <TopBar />
        <div style={{ width: "100%", height: "600px" }}>
          <Map
            lat={this.state.lat}
            lng={this.state.lng}
            zoom={this.state.zoom}
            findCoordinates={this.findCoordinates}
            positions={positions}
            options={this.state.options}
          />
        </div>
        <BottomBar />
      </React.Fragment>
    );
  }
}

export default UI;
