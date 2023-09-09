import React, { Component } from "react";

export class PortfolioPage extends Component {
  render() {
    let portfolioId = window.location.pathname.split("/").at(-1);
    return (
      <section>
        <h1>PortfolioPage {portfolioId}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui.
        </p>
      </section>
    );
  }
}

export default PortfolioPage;
