// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

// Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colors.

// Examples:

// "RGBRGBRGGB"   => 1
// "RGGRGBBRGRR"  => 3
// "RRRRGGGGBBBB" => 9

// function minStonesToRemove(stones) {
//   let removalCount = 0;
//   for (let i = 0; i < stones.length - 1; i++) {
//       if (stones[i] === stones[i + 1]) {
//           removalCount++;
//       }
//   }

//   return removalCount;
// }



function minStonesToRemove(stones) {
  if (!stones || stones.length === 1) {
      return 0;
  }

  return stones.split('').reduce((removalCount, currentStone, index) => {
      if (currentStone === stones[index + 1]) {
          return removalCount + 1;
      }
      return removalCount;
  }, 0);
}


// Examples
console.log(minStonesToRemove("RGBRGBRGGB"));   // Output: 1
console.log(minStonesToRemove("RGGRGBBRGRR"));  // Output: 3
console.log(minStonesToRemove("RRRRGGGGBBBB")); // Output: 9
