import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.i = 1;
    this.state = { counter: this.i };
  }

  componentWillMount() {
    this.id = setInterval(() => {
      this.setState({ counter: this.i++ });
    }, 600);
  }

  stopTimer = () => {
    clearInterval(this.id);
  };

  render() {
    return (
      <>
        <div>{this.state.counter}</div>
        <button onClick={this.stopTimer}>Stop</button>
      </>
    );
  }
}

export default Clock;
