import React, { Component } from "react";
import { Dropdown, DropdownBar, SettingsButton } from './styles';

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
        <SettingsButton></SettingsButton>
        <DropdownBar>
          <Dropdown>
            <option selected="selected" disabled="disabled">
              Select people
            </option>
            <option value="allpeople">All</option>
            <option value="friends">Friends</option>
            <option value="me">Me</option>
          </Dropdown>
          <Dropdown>
            <option selected="selected" disabled="disabled">
              Select a drink
            </option>
            <option value="alldrinks">All</option>
            <option value="beer">Beer</option>
            <option value="wine">Wine</option>
            <option value="liquor">Liquor</option>
            <option value="mixed">Mixed</option>
          </Dropdown>
          <Dropdown>
            <option selected="selected" disabled="disabled">
              Select a time
            </option>
            <option value="alltime">All</option>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </Dropdown>
          <div>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button>Search for friends</button>
          </div>
        </DropdownBar>
      </React.Fragment>
    );
  }
}

export default TopBar;
