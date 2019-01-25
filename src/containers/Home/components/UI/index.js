import React, { Component } from "react";
import BottomBar from "./components/BottomBar";
import Map from "./components/Map";
import TopBar from "./components/TopBar";
import { Query } from "react-apollo";
import GET_DRINKS from "./queries.js";

// const positions = [
//   { lat: 42.372042, lng: -71.118454 },
//   { lat: 42.367, lng: -71.12 },
//   { lat: 42.371, lng: -71.117 },
//   { lat: 42.373, lng: -71.117 }
// ];

class UI extends Component {
  constructor() {
    super();
    this.state = {
      lat: 42.375,
      lng: -71.1167,
      type: "ALL",
      date: "ALL",
      group: "ALL",
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
          // console.log(this.state);
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

  updateState = ({ type, date, group }) => {
    this.setState({ type, date, group });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <TopBar updateParentState={this.updateState} />
        <Query
          query={GET_DRINKS}
          fetchPolicy="network-only"
          variables={{
            input: {
              location: { lat: this.state.lat, long: this.state.lng },
              type: this.state.type,
              date: this.state.date,
              group: this.state.group
            }
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p> Loading </p>;
            if (error) return <p>An error occurred</p>;

            return (
              <div style={{ width: "100%", height: "600px" }}>
                <Map
                  lat={this.state.lat}
                  lng={this.state.lng}
                  zoom={this.state.zoom}
                  findCoordinates={this.findCoordinates}
                  positions={data.drinks.drinks.map(drink => ({
                    lat: parseFloat(drink.lat),
                    lng: parseFloat(drink.long)
                  }))}
                  options={this.state.options}
                />
              </div>
            );
          }}
        </Query>
        <BottomBar lat={this.state.lat} lng={this.state.lng} />
      </React.Fragment>
    );
  }
}

export default UI;
