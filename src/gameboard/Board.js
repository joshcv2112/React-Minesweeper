import React from 'react';

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

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  // Copy of the one in Board component.
  // TODO: Isolate this as a utility.
  contains (coordinates) {
    for (var i = 0; i < this.props.mineLocations.length; i++) {
      if (this.props.mineLocations[i][0] === coordinates[0] && this.props.mineLocations[i][1] === coordinates[1]) {
        return true;
      }
    }
    return false;
  }

  placeUnit(coordinates) {
    if (this.contains(coordinates)) {
      return "X";
    } else {
      return "O";
    }
  }

  render() {
    return (
      <button className='square' onClick={() => this.setState({ value: 'X' })}>
        {this.placeUnit(this.props.coordinates)}
      </button>
    );
  }
}

export default Board;
