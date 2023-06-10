function toCsvText(array){
for (let i = 0; i < array.length; i++) {
  array[i] = array[i].join(',')
}
return array.join("\n");
}

console.log(toCsvText([[-25, 21, 2, -33, 48],[30,31,-32,33,-34]]))

//output
//-25,21,2,-33,48\n
//30,31,-32,33,-34