// TODO: Implement these functions in the app for randomly
// generating the mine locations.

function contains(tupleList, x, y) {
  for (i = 0; i < tupleList.length; i++) {
    if (tupleList[i][0] == x && tupleList[i][1] == y) {
      return true;
    }
  }
  return false;
}

function foo() {
  var tupleList = [];

  // 72 should eventually be done as a percentage of the total dimensions.
  // Don't hardcode it.
  while (tupleList.length <= 72) {
    var x = Math.floor(Math.random() * 16);
    var y = Math.floor(Math.random() * 30);
    if (!contains(tupleList, x, y)) {
      tupleList.push([x, y]);
    }
  }
  tupleList.sort();
  console.log(tupleList);
}

foo();
