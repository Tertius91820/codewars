//Paramaters - Integers to check for even or odd numbers

//Return - whether numbers are odd or even

//Example - 2=> even 
//          3=> odd

//PsuesoCode -finding out whether a input int is a even or odd number

function evenOrOdd(numbers){
  if (numbers %2 == 0){
    return "Even";
  }else{
    return "Odd";
  }
}console.log(evenOrOdd(2));


function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}console.log (even_or_odd(5))