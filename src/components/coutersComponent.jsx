import React, { Component } from "react";
import Counter from "./counterComponet";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: -1 },
      { id: 5, value: 0 },
      { id: 6, value: 1 },
      { id: 7, value: 2 },
      { id: 8, value: -1 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    console.log(this.state.counters);
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((m) => {
      m.value = 0;
      return m;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            key={counter.id}
            value={counter.value}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
