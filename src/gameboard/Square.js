import React from 'react';

class Square extends React.Component {
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
          {this.setMineTiles(this.props.coordinates)}
        </button>
      );
    }
  }

  export default Square;