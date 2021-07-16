const urlEncode = function (text) {

  text = text.trim();
  const newText = text.split(" ").join("%20")
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));