import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  formatCount = () => {
    let { value: count } = this.state;
    return count ? count : "Zero";
  };

  formatBadges = () => {
    let { value: count } = this.state;
    return count ? "primary" : "warning";
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={"badge m-2 badge-" + this.formatBadges()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
