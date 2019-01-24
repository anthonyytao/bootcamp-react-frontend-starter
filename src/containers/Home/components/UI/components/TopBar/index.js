import React, { Component } from "react";
import { Dropdown, DropdownBar, SearchButton, SearchInput, Selection } from './styles';

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
        <DropdownBar>
          <Dropdown>
            <Selection selected="selected" disabled="disabled">
              People
            </Selection>
            <Selection value="allpeople">All</Selection>
            <Selection value="friends">Friends</Selection>
            <Selection value="me">Me</Selection>
          </Dropdown>
          <Dropdown>
            <Selection selected="selected" disabled="disabled">
              Drinks
            </Selection>
            <Selection value="alldrinks">All</Selection>
            <Selection value="beer">Beer</Selection>
            <Selection value="wine">Wine</Selection>
            <Selection value="liquor">Liquor</Selection>
            <Selection value="mixed">Mixed</Selection>
          </Dropdown>
          <Dropdown>
            <Selection selected="selected" disabled="disabled">
              Time
            </Selection>
            <Selection value="alltime">All</Selection>
            <Selection value="hour">Hour</Selection>
            <Selection value="day">Day</Selection>
            <Selection value="week">Week</Selection>
            <Selection value="month">Month</Selection>
            <Selection value="year">Year</Selection>
          </Dropdown>
          <div>
            <SearchInput
              placeholder="Add friend by email"
              type="text"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <SearchButton><i class="fa fa-search"></i></SearchButton>
          </div>
        </DropdownBar>
      </React.Fragment>
    );
  }
}

export default TopBar;
