import React, { Component } from "react";

class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      searchvalue: ""
    };
  }

  handleChange = e => {
    this.setState({ searchvalue: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <select>
          <option selected="selected" disabled="disabled">
            Select people
          </option>
          <option value="allpeople">All</option>
          <option value="friends">Friends</option>
          <option value="me">Me</option>
        </select>
        <select>
          <option selected="selected" disabled="disabled">
            Select a drink
          </option>
          <option value="alldrinks">All</option>
          <option value="beer">Beer</option>
          <option value="wine">Wine</option>
          <option value="liquor">Liquor</option>
          <option value="mixed">Mixed</option>
        </select>
        <select>
          <option selected="selected" disabled="disabled">
            Select a time
          </option>
          <option value="alltime">All</option>
          <option value="hour">Hour</option>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button>Search for friends</button>
      </React.Fragment>
    );
  }
}

export default TopBar;
