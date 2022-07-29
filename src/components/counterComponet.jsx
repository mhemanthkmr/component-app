import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3", "tg"],
  };
  render() {
    return (
      <div className="">
        {this.props.children}
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
    const { value } = this.state;
    if (value === 0) {
      classes += "bg-warning text-dark";
    } else if (value < 0) {
      classes += "bg-danger";
    } else {
      classes += "bg-primary";
    }
    return classes;
  }
  increamentEvent = () => {
    this.setState({ value: this.state.value + 1 });
  };
  decreamentEvent = () => {
    this.setState({ value: this.state.value - 1 });
  };
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
