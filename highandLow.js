function highAndLow(numbers){
  let Arr = numbers.split(" ");
  let sortedArr = Arr.sort(function(a,b){return a-b});
  console.log(sortedArr)
   let firstandlast = sortedArr[0]+ sortedArr[sortedArr.length-1]
   return firstandlast
 }
 
 highAndLow('4 3 2 1')

// OR

//  function highAndLow(numbers){
//   var arr = numbers.split(' ').sort(function(a, b) { return a - b });
//   return arr[arr.length -1] + ' ' + arr[0];
// }