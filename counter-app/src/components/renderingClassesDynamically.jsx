import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <span>{this.formatCounter()}</span>
        <button>Increment</button>

        <span className="badge badge-primary m-2">{this.formatCounter()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
