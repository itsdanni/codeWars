// function groupCheck(s){
//   //first of all, if it's closed correctly, the length must be even
//   if (s.length%2 !== 0) return false;
//   //but an incorrect string can also be even
//   else {
//     var right = s.length / 2;//starting indices
//     var left = right - 1;
//     for (left, right; left >= 0; left--, right++){
//       var difference = Math.abs(s.charCodeAt(left) - s.charCodeAt(right));
//       if (difference !== 1 || difference !== 2) return false;
//     }
//   }
//   return true;
//  }

//use recursion, as long as there is an open group inside, the outside group cannot be closed
//we can use a stack!
//as long as the stack is not empty and the element immediately preceding the element is not a group, keep stacking
function groupCheck(s){
  if (!s.length) return true;//empty string
  var groupStack = [];
  var strArr = s.split('');
  groupStack.push(strArr.shift());//push up the first element
  while (strArr.length !== 0){
    groupStack.push(strArr.shift()); //push an el to stack
    if (groupStack.length > 1){
      var difference = Math.abs(groupStack[groupStack.length-1].charCodeAt(0) - groupStack[groupStack.length-2].charCodeAt(0));
      //if the two elements forms a group
      if (difference === 1 || difference === 2){
        groupStack.pop();
        groupStack.pop();
      }
    }
    //else keep stacking
  }
  return !groupStack.length;
}
/*pseudocode
while(there are elements on the stack)
if stack length > 1, compare the curr element and the element before it
if they form a group
pop both
*/
