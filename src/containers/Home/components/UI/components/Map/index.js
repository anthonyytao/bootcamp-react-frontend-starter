import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

class Map extends React.Component {
  static defaultProps = {
    center: { lat: 42.375, lng: -71.1167 },
    zoom: 15.2
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBXGSsSDuDecaYMwfAbE54T0VzM5Sm6cbo" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent lat={42.372042} lng={-71.118454} text={"HSA"} />
      </GoogleMapReact>
    );
  }
}

export default Map;