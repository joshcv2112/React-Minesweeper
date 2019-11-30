import React from 'react';

/*
Properties:
    mineLocations: array of x y coordinate tuples of all mine locations.
    coordinates: x y coordinates of the current square
*/
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
  
    render() {
      return (
        <button className='square' onClick={() => this.setState({ cellValue: 'X' })}>
          {this.props.value}
        </button>
      );
    }
  }

  export default Cell;