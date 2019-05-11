import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  formatCount = () => {
    let { value: count } = this.props.counter;
    return count ? count : "Zero";
  };

  formatBadges = () => {
    let { value: count } = this.props.counter;
    return count ? "primary" : "warning";
  };

  render() {
    return (
      <React.Fragment>
        <span className={"badge m-2 badge-" + this.formatBadges()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
