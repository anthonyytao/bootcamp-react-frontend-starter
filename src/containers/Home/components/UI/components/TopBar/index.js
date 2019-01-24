import React, { Component } from "react";
import { Dropdown, DropdownBar, SearchButton, SearchInput } from "./styles";

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
          <Dropdown
            id="groups"
            onChange={() =>
              this.props.updateGroup(document.getElementById("groups").value)
            }
          >
            <option selected="selected" disabled="disabled">
              Select people
            </option>
            <option value="ALL">All</option>
            <option value="FRIENDS">Friends</option>
            <option value="ME">Me</option>
          </Dropdown>
          <Dropdown
            id="drinkTypes"
            onChange={() =>
              this.props.updateDrinkType(
                document.getElementById("drinkTypes").value
              )
            }
          >
            <option selected="selected" disabled="disabled">
              Select a drink
            </option>
            <option value="ALL">All</option>
            <option value="BEER">Beer</option>
            <option value="WINE">Wine</option>
            <option value="LIQUOR">Liquor</option>
            <option value="MIXED">Mixed</option>
          </Dropdown>
          <Dropdown
            id="times"
            onChange={() =>
              this.props.updateTime(document.getElementById("times").value)
            }
          >
            <option selected="selected" disabled="disabled">
              Select a time
            </option>
            <option value="ALL">All</option>
            <option value="HOUR">Hour</option>
            <option value="DAY">Day</option>
            <option value="WEEK">Week</option>
            <option value="MONTH">Month</option>
            <option value="YEAR">Year</option>
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
            <SearchButton>
              <i class="fa fa-search" />
            </SearchButton>
          </div>
        </DropdownBar>
        <button onClick={localStorage.removeItem("token")}>logout</button>
      </React.Fragment>
    );
  }
}

export default TopBar;
