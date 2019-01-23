import React from "react";
import GoogleMapReact from "google-map-react";

const heatmapData = {
  positions: [{ lat: 42.372042, lng: -71.118454 }, { lat: 42.38, lng: -71.12 }],
  options: {
    radius: 10,
    opacity: 0.5
  }
};

class Map extends React.Component {
  componentWillMount() {
    this.props.findCoordinates();
  }

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBXGSsSDuDecaYMwfAbE54T0VzM5Sm6cbo" }}
        center={{ lat: this.props.lat, lng: this.props.lng }}
        defaultZoom={this.props.zoom}
        heatmapLibrary={true}
        heatmap={heatmapData}
      />
    );
  }
}

export default Map;
