import React from 'react';

/*  Properties:
      mineLocations: array of x y coordinate tuples of all mine locations.
      coordinates: x y coordinates of the current square. */
class Cell extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cellValue: null,
        cellVisible: false,
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
      if (this.state.cellVisible)
        return this.props.value;
      return "";
    }

    cellColor() {
      var className;
      switch (this.props.value) {
        case "X":
          className = "mine_square";
          break;
        case 6:
        case 7:
        case 8:
          className = "six_plus_square";
          break;
        case 5:
          className = "five_square";
          break;
        case 4:
          className = "four_square";
          break;
        case 3:
          className = "three_square";
          break;
        case 2:
          className = "two_square";
          break;
        case 1:
          className = "one_square";
          break;
        case 0:
          className = "zero_square";
          break;
        default:
          className = "zero_square";
          break;
      }
      return className;
    }

    clickCell = () => {
      this.setState({cellVisible: true});
      this.forceUpdate();
    }

    render() {
      return (
        <button className={"square " + this.cellColor()} onClick={() => this.clickCell()}>
          {this.displayValue()}
        </button>
      );
    }
  }

  export default Cell;