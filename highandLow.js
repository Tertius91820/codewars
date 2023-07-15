function highAndLow(numbers){
  let Arr = numbers.split(" ").sort((a,b)=> a-b);
  console.log(Arr)
   let firstandlast = Arr[0]+','+ Arr[Arr.length-1]
  console.log(firstandlast);
   return firstandlast
 }
 
 highAndLow('4 3 2 1')

// OR

//  function highAndLow(numbers){
//   var arr = numbers.split(' ').sort(function(a, b) { return a - b });
//   return arr[arr.length -1] + ' ' + arr[0];
// }