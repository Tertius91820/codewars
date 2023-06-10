function getCount(str) {
  let count = 0;
  let arr = str.split("");
  
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
