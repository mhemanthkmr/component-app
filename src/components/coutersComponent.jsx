import React, { Component } from "react";
import Counter from "./counterComponet";
class Counters extends Component {
  render() {
    const { onDecrement, onIncrement, onDelete, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            onDelete={onDelete}
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
