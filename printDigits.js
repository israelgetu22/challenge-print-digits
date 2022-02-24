function printDigits(num) {
  let reversednum = 0;
  while (num > 0) {
    reversednum = reversednum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversednum;
}

console.log(printDigits(123));

var num = 123456;
var digits = [];
while (num > 0) {
  digits.push(num % 10);
  num = Math.trunc(num / 10); // floor also possible
}

console.log(digits);
