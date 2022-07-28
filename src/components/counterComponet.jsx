import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3", "tg"],
  };
  render() {
    return (
      <div className="">
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        {/* <span>{this.formatCount()}</span> */}
        <button
          onClick={this.decreamentEvent}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={this.increamentEvent}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 ";
    const { count } = this.state;
    if (count === 0) {
      classes += "bg-warning text-dark";
    } else if (count < 0) {
      classes += "bg-danger";
    } else {
      classes += "bg-primary";
    }
    return classes;
  }
  increamentEvent = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decreamentEvent = () => {
    this.setState({ count: this.state.count - 1 });
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
