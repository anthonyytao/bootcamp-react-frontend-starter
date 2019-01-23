import React, { Component } from "react";
import { Button, ButtonBar, Counter, Clicker } from './styles';

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
      <ButtonBar>
        <Clicker>
          <Button onClick={() => this.setState({ beer: this.state.beer + 1 })}>
            Beer
          </Button>
          <Counter>{this.state.beer}</Counter>
        </Clicker>
        <Clicker>
          <Button onClick={() => this.setState({ wine: this.state.wine + 1 })}>
            Wine
          </Button>
          <Counter>{this.state.wine}</Counter>
        </Clicker>
        <Clicker>
          <Button
            onClick={() => this.setState({ liquor: this.state.liquor + 1 })}
          >
            Liquor
          </Button>
          <Counter>{this.state.liquor}</Counter>
        </Clicker>
        <Clicker>
          <Button onClick={() => this.setState({ mixed: this.state.mixed + 1 })}>
            Mixed
          </Button>
          <Counter>{this.state.mixed}</Counter>
        </Clicker>
      </ButtonBar>
    );
  }
}

export default BottomBar;
