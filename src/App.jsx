import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Result from "./components/Results/Result";
import SearchBox from "./components/SearchBox/SearchBox";

const name = require("@rstacruz/startup-name-generator");

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerText: "Name It!",
      animeExpanded: true,
      suggestedNames: [],
    };
  }
  handleChangeEvent = (e) => {
    this.setState({
      animeExpanded: !e,
      suggestedNames: name(e),
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          animeExpanded={this.state.animeExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleChangeEvent} />
        <Result suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
