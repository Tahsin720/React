import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
state = {
    counters: [
        { id: 1, value: 0, name: "Shirt" },
        { id: 2, value: 0, name: "Pant" },
        { id: 3, value: 0, name: "Shoe" },
        { id: 4, value: 0, name: "Hat" },
    ],
};

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter };
        counters[index].value++;
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleDelete = (counterId) => {
      // console.log("Worked: ", counterId);
      const counters = this.state.counters.filter((c) => c.id !== counterId);
      this.setState({ counters });
    };

  render() {
    return (
      <div>
        <button 
        onClick={this.handleReset}
        className="btn btn-primary btn-sm m-2">
            Reset
        </button>   
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
            <h4>{counter.name}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
