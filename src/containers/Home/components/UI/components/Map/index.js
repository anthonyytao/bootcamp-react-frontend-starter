import React from "react";
import GoogleMapReact from "google-map-react";

class Map extends React.Component {
  componentWillMount() {
    this.props.findCoordinates();
  }

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBXGSsSDuDecaYMwfAbE54T0VzM5Sm6cbo" }}
        center={{ lat: this.props.lat, lng: this.props.lng }}
        zoom={this.props.zoom}
        heatmapLibrary={true}
        heatmap={{
          positions: this.props.positions,
          options: this.props.options
        }}
      />
    );
  }
}

export default Map;
