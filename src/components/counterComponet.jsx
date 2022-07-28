import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3", "tag4"],
  };
  render() {
    return (
      <div className="">
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        {/* <span>{this.formatCount()}</span> */}
        <button
          onClick={this.increamentCount}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((hello) => (
            <li key={hello}>{hello}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }
  increamentCount() {
    const { count } = this.state;
    count += 1;
    console.log(count);
    return count;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
