import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Board from './gameboard/Board.js';
import Header from './interface/Header.js';
import Footer from './interface/Footer.js';
import Settings from './interface/Settings.js';

class Game extends React.Component {
  // These values will ater be set by Settings components.
  width = 30;
  height = 25;
  mineDensity = 0.25;

  render() {
    return (
      <div>
        <Header />
        <Settings />
        <Board height={this.height} width={this.width} mineDensity={(this.width * this.height) * this.mineDensity} />
        <Footer />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
