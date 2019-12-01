import React from 'react';

import Cell from './Cell.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mineLocationsArray: this.generateMineLocations() };
  }

  tileIsAMine(mineLocations, x, y) {
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
      if (!this.tileIsAMine(mineLocations, x, y)) {
        mineLocations.push([x, y]);
      }
    }
    mineLocations.sort();
    return mineLocations;
  }

  isMineAdjacent(x, y) {
    if (this.tileIsAMine(this.state.mineLocationsArray, x, y)) 
      return 1;
    return 0;
  }

  // TODO: Implement this functionality...
  getProximityToMine(x, y) {
    var numAdjacentMines = 0;
    var neighborsList = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
    for (var i = 0; i < neighborsList.length; i++) {
      numAdjacentMines += this.isMineAdjacent(x + neighborsList[i][0], y + neighborsList[i][1]);
    }
    return numAdjacentMines;
  }

  getCellValue(x, y) {
    if (this.tileIsAMine(this.state.mineLocationsArray, x, y)) {
      return "X";
    }
    return this.getProximityToMine(x, y);
  }

  getDivList(xCoord) {
    var divList = [];
    for (var yCoord = 0; yCoord < 30; yCoord++) {
      this.getCellValue();
      divList.push(<Cell
        mineLocations={this.state.mineLocationsArray}
        coordinates={[xCoord, yCoord]} 
        value={this.getCellValue(xCoord, yCoord)} />);
    }
    return divList;
  }

  getOtherList() {
    var otherListThing = [];
    for (var i = 0; i < 16; i++)
      otherListThing.push(<div className='board-row'>{this.getDivList(i)}</div>);
    return otherListThing;
  }

  render() {
    return (
      <div>
        {this.getOtherList()}
      </div>
    );
  }
}

export default Board;
