import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Board from './gameboard/Board.js';
import Header from './interface/Header.js';
import Footer from './interface/Footer.js';
import Settings from './interface/Settings.js';

class Game extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Settings />
        <Board />
        <Footer />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
