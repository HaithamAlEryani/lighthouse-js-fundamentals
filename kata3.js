const numberOfVowels = function(data) {
  // Put your solution here
  let count = 0;
  for (let i = 0; i <data.length; i++){
    switch (data[i].toUpperCase()) {
      case "A" : count++; break;
      case "E" : count++; break;
      case "I" : count++; break;
      case "O" : count++; break;
      case "U" : count++; break;
      default: break;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));