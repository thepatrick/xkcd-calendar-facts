import React, { Component } from 'react';
import './App.css';

import generateRandomFact from './RandomFact.js';

class App extends Component {
  constructor() {
    super();
    this.state = { fact: generateRandomFact() };
  }

  newFact = () => {
    this.setState({ fact: generateRandomFact() });
  }

  render() {
    const { event, unusualManner, reason, wildCard, consequence } = this.state.fact; 
    return (
      <div className="outer-shell">
        <div className="shell">
          <div className="fact-container">
            <div className="fact">
                Did you know that <em>{event}</em>{' '}
                <em>{unusualManner}</em> because of{' '}
                <em>{reason}</em>? Apparently <em>{wildCard}</em>.
                This <em>{consequence}</em>.
            </div>
          </div>
        </div>

        <button class="newFact" onClick={this.newFact}>don't believe it?</button>

        <div className="sosumi">
          Inspired by <a href="https://xkcd.com/1930">xkcd 1930</a>.
          JS from <a href="https://github.com/shreyasminocha/calendar-facts">@shreyasminocha</a>.
          HTML by <a href="https://thepatrick.io/">@thepatrick</a>.
        </div>
      </div>
    );
  }
}

export default App;
