import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    // tags: ["tag1", "tag2", "tag3", "tag4"],
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is No Tags</p>;
    else
      return (
        <ul>
          {this.state.tags.map((hello) => (
            <li key={hello}>{hello}</li>
          ))}
        </ul>
      );
  }
  render() {
    return this.renderTags();
  }
}

export default Counter;
