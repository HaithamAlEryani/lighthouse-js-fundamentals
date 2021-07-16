const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let instractor = {}
  let longestName = ""
  if (instructors.length > 0) {
    let i = 0;
    do {
      if (instructors[i].name.length > longestName.length) {
        longestName = instructors[i].name;
        instractor = instructors[i];
      }
      i++
    } while (i < instructors.length);
  }

  return instractor;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));