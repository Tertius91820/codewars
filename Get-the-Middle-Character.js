function getMiddle(word) {
  var length = word.length;
  var middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return word.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return word.charAt(middleIndex);
  }
}

console.log(getMiddle("test"));     // Output: es
console.log(getMiddle("testing"));  // Output: t


//or

// function getMiddle(s)
// {
//   //Code goes here!
//   let len = s.length;
//   if (len % 2) {
//     return s[(len - 1) / 2];
//   } else {
//     return s[len / 2 - 1] + s[len / 2];
//   }
// }
