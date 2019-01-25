import React, { Component } from "react";
import {
  Dropdown,
  DropdownBar,
  SearchButton,
  SearchInput,
  LogOutButton
} from "./styles";
import { Link } from "react-router-dom";
import ADD_FRIEND from "./mutations";

class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      searchvalue: "",
      group: "ALL",
      type: "ALL",
      date: "ALL",
      searchInput: ""
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      () => this.props.updateParentState(this.state)
    );
  };

  render() {
    return (
      <React.Fragment>
        <DropdownBar>
          <Dropdown
            id="groups"
            name="group"
            value={this.state.group}
            onChange={this.handleInputChange}
          >
            <option defaultValue="" disabled="disabled">
              Select people
            </option>
            <option value="ALL">All</option>
            <option value="FRIENDS">Friends</option>
            <option value="ME">Me</option>
          </Dropdown>
          <Dropdown
            id="drinkTypes"
            name="type"
            value={this.state.type}
            onChange={this.handleInputChange}
          >
            <option defaultValue="" disabled="disabled">
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
            name="date"
            value={this.state.date}
            onChange={this.handleInputChange}
          >
            <option defaultValue="" disabled="disabled">
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
              name="searchInput"
              value={this.state.searchInput}
              onChange={this.handleInputChange}
            />
            <Mutation mutation={ADD_FRIEND}>
              {(addFriend, { loading, error }) => {
                if (loading) return <p> Loading </p>;
                if (error) return <p>An error occurred</p>;
                return (
                  <SearchButton
                    onClick={addFriend}
                    variables={{ input: { email: this.state.searchInput } }}
                  >
                    <i className="fa fa-search" />
                  </SearchButton>
                );
              }}
            </Mutation>
          </div>
          {localStorage.getItem("token") && (
            <Link to="/">
              <LogOutButton onClick={() => localStorage.removeItem("token")}>
                Logout
              </LogOutButton>
            </Link>
          )}
        </DropdownBar>
      </React.Fragment>
    );
  }
}

export default TopBar;
