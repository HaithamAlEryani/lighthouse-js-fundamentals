const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let submitter = "";
  let max = 0;
  for (let i = 0; i < vegetables.length; i++) {
    for (const key in vegetables[i]) {
      if (key === metric) {
        if (vegetables[i][key] > max) {
          max = vegetables[i][key];
          submitter = vegetables[i].submitter;
        }
      }
    }
  }

  return submitter;
}
cvegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
metric = 'd'
console.log(judgeVegetable(cvegetables, metric))