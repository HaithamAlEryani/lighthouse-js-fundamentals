function howManyHundreds(hundreds) {
  let count = 0;
  if (hundreds >= 100) {
    for (let i = 100; i <= hundreds; i += 100) {
      count++;
    }
    return count;
  }
  return count;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);