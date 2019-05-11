import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    let { onReset, onIncrement, onDecrement, onDelete, counters } = this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary bt-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
