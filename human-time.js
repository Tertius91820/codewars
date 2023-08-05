//P-
//R-
//E-
//P-





function humanReadable(seconds){
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}


console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(359999));