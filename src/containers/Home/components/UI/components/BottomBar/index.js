import React, { Component } from "react";

class BottomBar extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.findCoordinates()}>
          find coordinates
        </button>
      </React.Fragment>
    );
  }
}

export default BottomBar;
