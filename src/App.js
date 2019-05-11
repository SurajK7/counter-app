import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 11232, value: 0 },
      { id: 21239, value: 0 },
      { id: 32390, value: 0 },
      { id: 43482, value: 0 },
      { id: 52332, value: 0 },
      { id: 22136, value: 0 },
      { id: 71234, value: 0 }
    ]
  };

  handleIncrement = counterId => {
    let currentValue = this.state.counters.find(c => c.id === counterId).value;
    let currentIndex = this.state.counters.findIndex(c => c.id === counterId);
    let counters = this.state.counters.filter(c => c.id !== counterId);
    counters.splice(currentIndex, 0, {
      id: counterId,
      value: currentValue + 1
    });
    this.setState({
      counters: counters
    });
  };

  handleDecrement = counterId => {
    let currentValue = this.state.counters.find(c => c.id === counterId).value;
    if (!currentValue) return;
    let currentIndex = this.state.counters.findIndex(c => c.id === counterId);
    let counters = this.state.counters.filter(c => c.id !== counterId);
    counters.splice(currentIndex, 0, {
      id: counterId,
      value: currentValue - 1
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
        <NavBar counters={this.state.counters} />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
