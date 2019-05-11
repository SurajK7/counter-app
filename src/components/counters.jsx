import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 9 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 },
      { id: 7, value: 0 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <p key={counter.id}>
            <Counter id={counter.id} value={counter.value} />
          </p>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;