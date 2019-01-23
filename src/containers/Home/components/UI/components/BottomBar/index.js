import React, { Component } from "react";

class BottomBar extends Component {
  constructor() {
    super();
    this.state = {
      beer: 0,
      wine: 0,
      liquor: 0,
      mixed: 0
    };
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ beer: this.state.beer + 1 })}>
          Beer
        </button>
        <div>{this.state.beer}</div>
        <button onClick={() => this.setState({ wine: this.state.wine + 1 })}>
          Wine
        </button>
        <div>{this.state.wine}</div>
        <button
          onClick={() => this.setState({ liquor: this.state.liquor + 1 })}
        >
          Liquor
        </button>
        <div>{this.state.liquor}</div>
        <button onClick={() => this.setState({ mixed: this.state.mixed + 1 })}>
          Mixed
        </button>
        <div>{this.state.mixed}</div>
      </React.Fragment>
    );
  }
}

export default BottomBar;
