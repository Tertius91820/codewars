// Given the triangle of consecutive odd numbers:

//              1               =1^3
//           3     5            =2^3
//        7     9    11         =3^3
//    13    15    17    19      =4^3
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {
return n*n*n
}