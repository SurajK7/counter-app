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

  handleIncrement = counterId => {
    let currentValue = this.state.counters.find(c => c.id === counterId).value;
    let currentIndex = this.state.counters.find(c => c.id === counterId).id;
    let counters = this.state.counters.filter(c => c.id !== counterId);
    counters.splice(currentIndex - 1, 0, {
      id: counterId,
      value: currentValue + 1
    });
    this.setState({
      counters: counters
    });
  };

  handleDelete = counterId => {
    this.setState({
      counters: this.state.counters.filter(c => c.id !== counterId)
    });
  };

  handleReset = () => {
    let counters = [...this.state.counters];
    for (let counter of counters) counter.value = 0;
    this.setState({
      counters
    });
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleReset}
          className="btn btn-primary bt-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <p key={counter.id}>
            <Counter
              counter={counter}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
            />
          </p>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
