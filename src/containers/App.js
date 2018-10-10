import React, { Component } from "react";

import NavMenu from "../components/NavMenu";
import HomeContainer from "./HomeContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContainer />
      </div>
    );
  }
}

export default App;
