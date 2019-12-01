import React from 'react';

/*  Properties:
      mineLocations: array of x y coordinate tuples of all mine locations.
      coordinates: x y coordinates of the current square. */
class Cell extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cellValue: null
      };
    }
  
    // Copy of the one in Board component.
    // TODO: Isolate this as a utility.
    tileIsAMine (coordinates) {
      for (var i = 0; i < this.props.mineLocations.length; i++) {
        if (this.props.mineLocations[i][0] === coordinates[0] && this.props.mineLocations[i][1] === coordinates[1]) {
          return true;
        }
      }
      return false;
    }
  
    setMineTiles(coordinates) {
      if (this.tileIsAMine(coordinates)) {
        return "X";
      } else {
        return "O";
      }
    }
  
    displayValue() {
      if (this.props.value === 0)
        return "";
      return this.props.value;
    }

    cellColor() {
      if (this.props.value === "X")
        return "mine_square";
      switch (this.props.value) {
        case "X":
          return "mine_square";
          break;
        case 6,7,8:
          return "six_plus_square";
          break;
        case 5:
          return "five_square";
          break;
        case 4:
          return "four_square";
          break;
        case 3:
          return "three_square";
          break;
        case 2:
          return "two_square";
          break;
        case 1:
          return "one_square";
          break;
        case 0:
          return "zero_square";
          break;
      }
    }

    render() {
      return (
        <button className={"square " + this.cellColor()}>
          {/*this.props.value*/}
          {this.displayValue()}
        </button>
      );
    }
  }

  export default Cell;