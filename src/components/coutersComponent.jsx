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
  //   getBadgeClass() {
  //     let classes = "badge m-2 ";
  //     const { value } = this.state;
  //     if (value === 0) {
  //       classes += "bg-warning text-dark";
  //     } else if (value < 0) {
  //       classes += "bg-danger";
  //     } else {
  //       classes += "bg-primary";
  //     }
  //     return classes;
  //   }
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
