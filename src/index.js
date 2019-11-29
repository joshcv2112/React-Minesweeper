import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className='square' onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  getDivList() {
    var divList = [];

    for (var i = 0; i < 30; i++) {
      divList.push(<Square />);
    }

    return divList;
  }

  getOtherList() {
    var otherListThing = [];

    for (var i = 0; i < 16; i++) {
      otherListThing.push(<div className='board-row'>{this.getDivList()}</div>);
    }

    return otherListThing;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className='status'>{status}</div>
        {/* <div className='board-row'>{this.getDivList()}</div> */}
        {this.getOtherList()}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
