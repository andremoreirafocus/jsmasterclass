let counter = 0;
console.time("performance");
while (counter < 100000) {
  new String("JavaScript");
  counter++;
}
console.timeEnd("performance");
console.log("Linha 1\u000ALinha 2");
