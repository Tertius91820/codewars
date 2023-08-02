//P- a String with a Varying number of words in it. Words may have punctuation marks seperated by a space.
//R- a string of words with the first letter of each word moved to the end of the word with 'ay' added to end of each word 
//E- pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//   pigIt('Hello world !');     // elloHay orldway !
//P- split the string into individual words,then split each word into two parts(the first letter and the rest of the word).reverse the order of these parts, and concatenate them back together.Check if a word is actualy a punctuation mark and if it is not , then add "ay" to the end. Concatenate the individual words back intoa single string and return
//push,slice,charCodeAt,split,join,map,reverse , match


function pigIt(str){
  console.log(str)
  let marks = ['.',',','!','?','"']
 let result = str.split(' ').map(word => !marks.includes(word) ? word.slice(1)+word[0]+'ay': word).join(' ')

  console.log(result);
}

pigIt('Hello world ?')