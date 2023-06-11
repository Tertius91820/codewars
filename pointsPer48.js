// In this example, the function is called with ppg = 10 and mpg = 10, which means the player scores an average of 10 points per game and plays 10 minutes per game. The pointsPer48 function will return 48.0, indicating that if the player were to play a full 48-minute game, they would average 48 points.

function poinsPer48(ppg,mpg){
if(ppg === 0){
  return 0
}else{
 return Math.round(((ppg/mpg) *48)*10) / 10
} 
}
console.log(poinsPer48(10,10))


//OR

// function pointsPer48(ppg, mpg) {
//   return ppg === 0 ? 0 : Math.round((ppg / mpg) * 48 * 10) / 10;
// }

// console.log(pointsPer48(10, 10));  // Output: 48.0
