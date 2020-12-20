import React, { Component } from 'react';

import Landing from './Landing';
import Portfolio from './Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Landing />
        <div className="fader"/>
        <Portfolio />
      </div>
    );
  }
}

export default App;
