import React, { Component } from "react";
import { Button, ButtonBar, Counter, Clicker } from "./styles";
import { Mutation, Query } from "react-apollo";
import GET_NUMBER from "./queries";
import CREATE_DRINK from "./mutations";

class BottomBar extends Component {
  render() {
    return (
      <ButtonBar>
        <Mutation
          mutation={CREATE_DRINK}
          variables={{
            input: { type: "BEER", lat: this.props.lat, long: this.props.lng }
          }}
          refetchQueries={() => {
            return [
              {
                query: GET_NUMBER,
                variables: {
                  input: { type: "BEER" }
                }
              }
            ];
          }}
        >
          {(createDrink, { loading, error }) => {
            if (loading)
              return (
                <Clicker>
                  <Button>B</Button>
                  <Counter />
                </Clicker>
              );
            if (error) return <p>An error occurred</p>;
            return (
              <Clicker>
                <Button onClick={createDrink}>B</Button>
                {localStorage.getItem("token") && (
                  <Query
                    query={GET_NUMBER}
                    variables={{
                      input: { type: "BEER" }
                    }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <p> Loading </p>;
                      if (error) return <p>An error occurred</p>;
                      return <Counter>{data.number.number}</Counter>;
                    }}
                  </Query>
                )}
                {!localStorage.getItem("token") && <Counter>0</Counter>}
              </Clicker>
            );
          }}
        </Mutation>
        <Mutation
          mutation={CREATE_DRINK}
          variables={{
            input: { type: "WINE", lat: this.props.lat, long: this.props.lng }
          }}
          refetchQueries={() => {
            return [
              {
                query: GET_NUMBER,
                variables: {
                  input: { type: "WINE" }
                }
              }
            ];
          }}
        >
          {(createDrink, { loading, error }) => {
            if (loading)
              return (
                <Clicker>
                  <Button>W</Button>
                  <Counter />
                </Clicker>
              );
            if (error) return <p>An error occurred</p>;
            return (
              <Clicker>
                <Button onClick={createDrink}>W</Button>
                {localStorage.getItem("token") && (
                  <Query
                    query={GET_NUMBER}
                    variables={{
                      input: { type: "WINE" }
                    }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <p> Loading </p>;
                      if (error) return <p>An error occurred</p>;
                      return <Counter>{data.number.number}</Counter>;
                    }}
                  </Query>
                )}
                {!localStorage.getItem("token") && <Counter>0</Counter>}
              </Clicker>
            );
          }}
        </Mutation>
        <Mutation
          mutation={CREATE_DRINK}
          variables={{
            input: { type: "LIQUOR", lat: this.props.lat, long: this.props.lng }
          }}
          refetchQueries={() => {
            return [
              {
                query: GET_NUMBER,
                variables: {
                  input: { type: "LIQUOR" }
                }
              }
            ];
          }}
        >
          {(createDrink, { loading, error }) => {
            if (loading)
              return (
                <Clicker>
                  <Button>L</Button>
                  <Counter />
                </Clicker>
              );
            if (error) return <p>An error occurred</p>;
            return (
              <Clicker>
                <Button onClick={createDrink}>L</Button>
                {localStorage.getItem("token") && (
                  <Query
                    query={GET_NUMBER}
                    variables={{
                      input: { type: "LIQUOR" }
                    }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <p> Loading </p>;
                      if (error) return <p>An error occurred</p>;
                      return <Counter>{data.number.number}</Counter>;
                    }}
                  </Query>
                )}
                {!localStorage.getItem("token") && <Counter>0</Counter>}
              </Clicker>
            );
          }}
        </Mutation>
        <Mutation
          mutation={CREATE_DRINK}
          variables={{
            input: { type: "MIXED", lat: this.props.lat, long: this.props.lng }
          }}
          refetchQueries={() => {
            return [
              {
                query: GET_NUMBER,
                variables: {
                  input: { type: "MIXED" }
                }
              }
            ];
          }}
        >
          {(createDrink, { loading, error }) => {
            if (loading)
              return (
                <Clicker>
                  <Button>M</Button>
                  <Counter />
                </Clicker>
              );
            if (error) return <p>An error occurred</p>;
            return (
              <Clicker>
                <Button onClick={createDrink}>M</Button>
                {localStorage.getItem("token") && (
                  <Query
                    query={GET_NUMBER}
                    variables={{
                      input: { type: "MIXED" }
                    }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <p> Loading </p>;
                      if (error) return <p>An error occurred</p>;
                      return <Counter>{data.number.number}</Counter>;
                    }}
                  </Query>
                )}
                {!localStorage.getItem("token") && <Counter>0</Counter>}
              </Clicker>
            );
          }}
        </Mutation>
      </ButtonBar>
    );
  }
}

export default BottomBar;
