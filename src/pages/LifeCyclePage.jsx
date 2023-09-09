import React, { Component } from "react";

export class LifeCyclePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    console.log("constructor");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <section>
        <h1>LifeCyclePage</h1>

      </section>
    );
  }
}

export default LifeCyclePage;
