import React from 'react';

import Square from './Square.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mineLocationsArray: this.generateMineLocations() };
  }

  contains(mineLocations, x, y) {
    for (var i = 0; i < mineLocations.length; i++) {
      if (mineLocations[i][0] === x && mineLocations[i][1] === y) {
        return true;
      }
    }
    return false;
  }

  generateMineLocations() {
    var mineLocations = [];
    while (mineLocations.length <= 72) {
      var x = Math.floor(Math.random() * 16);
      var y = Math.floor(Math.random() * 30);
      if (!this.contains(mineLocations, x, y)) {
        mineLocations.push([x, y]);
      }
    }
    mineLocations.sort();
    return mineLocations;
  }

  renderSquare(i) {
    return <Square />;
  }

  getDivList(xCoord) {
    var divList = [];

    for (var i = 0; i < 30; i++) {
      divList.push(<Square mineLocations={this.state.mineLocationsArray} coordinates={[xCoord, i]} />);
    }

    return divList;
  }

  getOtherList() {
    var otherListThing = [];

    for (var i = 0; i < 16; i++) {
      otherListThing.push(<div className='board-row'>{this.getDivList(i)}</div>);
    }

    return otherListThing;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className='status'>{this.state.mineLocationsArray}</div>
        {this.getOtherList()}
      </div>
    );
  }
}

export default Board;
