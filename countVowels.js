function getCount(str) {
  let count = 0;
  let arr = str.toLowerCase().split("");

  arr.forEach(function(item) {
    if (item === 'a'||
       item === 'e'||
       item === 'i'||
       item === 'o'||
       item === 'u') {
      count++;
    }
  });

  console.log(count); // Print the count outside the loop if you want to see the final result
  return count;
}
getCount('forEverYoung')

//OR
// function getCount(str) {
//   var vowelsCount = 0;
//   str.split("").forEach(function(x){
//     if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
//       vowelsCount += 1;
//     }
//   });  
//   return vowelsCount;
// }

//OR

// function getCount(str) {
//   let vowels = ['a','e','i','o','u'];
//   return str.split('').filter(letter => {
//     return vowels.includes(letter)? true : false;
//   }).length;
// }


//or  
// function getCount(str) {
//   return str.split('').reduce((e, i) => 'aeiou'.includes(i) ? e + 1 : e, 0)
// }