import React, { Component } from "react";

class Counter extends Component {
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
      <div className="container">
        <div className="row">
          <div className="col-1">
            <span className={"badge m-2 badge-" + this.formatBadges()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter.id)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter.id)}
              className={
                "btn btn-secondary btn-sm m-2 " +
                (this.props.counter.value ? "" : "disabled")
              }
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
