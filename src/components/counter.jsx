import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.Count()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        {/* <button onClick={this.handleDelete} className="btn btn-secondary btn-sm" >Reset</button> */}
        {/* <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul> */}
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge badge-"
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  Count() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value
  }
}

export default Counter;
