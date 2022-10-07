//Paramaters - Two Integers of positive or negative numbers

//Return - true if one is a even number and the other is uneven

//Example - (lovefunc(1,4), true)
//          (lovefunc(2,2), false)
//         

//PsuesoCode -returning a bool if numbers are opposite numbers


function lovefunc(flower1, flower2){
  return (flower2 %2 == 0) && (flower1%2 != 0) ? true : false
}console.log(lovefunc(3,3))