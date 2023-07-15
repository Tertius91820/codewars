function derive(coefficient,exponent){
  return `${coefficient*exponent}x^${exponent-1}`//using template litteral
}
console.log(derive(5,6))// logs 30x^5