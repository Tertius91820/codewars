//P-a single array with multiple type of elements includeing numbers , strings, booleans
//R- A single array with the same elements BUT the zeros are moved to the end of the  array.the other elemenets should remain in the same location in hte array
//E- moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//   moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
//P- itterate over the array adding the non zeros to an array. add zeros to another array. join the 2 arrays at the end


function moveZeros(arr) {
  let sorted =[];
  let zeros =[]
  arr.map(item => item === 0 ? zeros.push(0): sorted.push(item))

  let joined = (sorted.concat(zeros))
  console.log(joined);
 }

moveZeros([false,1,0,1,2,0,1,3,"a"])

