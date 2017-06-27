function doneOrNot(board){
  var comparison = [1,2,3,4,5,6,7,8,9];
  var sortedRows = board.map(function(row){
    return row.sort();
  });
  //using forEach outside so since we have to loop through all rows
  //using i inside since we can quit once two numbers are not equal
  sortedRows.forEach(function(row){
    for (var i = 0; i < 9; i++){
      if (row[i] !== comparison[i]) return false;
    }
  });

  //if we got all the way here, it must be completed
  return true;
}
