// Paramamters - whole number devisable by 2 other whole number w
// Returns - wheteher input number is divisable without a left over bit in bool
// // examples - 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function devisable(n,x,y){
  return (n%x == 0) && (n%y == 0) ? true : false
}