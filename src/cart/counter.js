import React, { Component } from "react";
import "./cart.css";

class Counter extends Component {
  state = {
    count: 1
  };

  increment = value => {
    if (value === "Godfather") {
      this.setState({ count: ++this.state.count });
    }
    if (value === "Rush hour") {
      this.setState({ count: ++this.state.count });
    }
    if (value === "Inception") {
      this.setState({ count: ++this.state.count });
    }
    if (value === "Trumbo") {
      this.setState({ count: ++this.state.count });
    }
    if (value === "Beatiful Mind") {
      this.setState({ count: ++this.state.count });
    }
    if (value === "Lethal Weapon") {
      this.setState({ count: ++this.state.count });
    }
    if (value === "Bad Boys") {
      this.setState({ count: ++this.state.count });
    }
  };
  decrement = value => {
    if (value === "Godfather") {
      this.setState({ count: this.state.count <= 0 ? 0 : --this.state.count });
    }
    if (value === "Rush hour") {
      this.setState({ count: this.state.count <= 0 ? 0 : --this.state.count });
    }
    if (value === "Inception") {
      this.setState({ count: this.state.count <= 0 ? 0 : --this.state.count });
    }
    if (value === "Trumbo") {
      this.setState({ count: this.state.count <= 0 ? 0 : --this.state.count });
    }
    if (value === "Beatiful Mind") {
      this.setState({ count: this.state.count <= 0 ? 0 : --this.state.count });
    }
    if (value === "Lethal Weapon") {
      this.setState({ count: this.state.count <= 0 ? 0 : --this.state.count });
    }
    if (value === "Bad Boys") {
      this.setState({ count: this.state.count <= 0 ? 0 : --this.state.count });
    }
  };
  render() {
    return (
      <div>
        <button
          class="increment"
          onClick={() => this.increment(this.props.value)}
        >
          +
        </button>
        <button
          class="decrement"
          onClick={() => this.decrement(this.props.value)}
        >
          -
        </button>
        <div class="count">{this.state.count}</div>
      </div>
    );
  }
}
export default Counter;
