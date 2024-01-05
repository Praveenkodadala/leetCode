let a = "15698742";

let convertNumber = (x) => {
  let a = x.split('');

  for (let i = a.length - 1; i >= 0; i--) {
    if ((a.length - i) % 3 === 0 && i !== 0) {
      a.splice(i, 0, ',');
    }
  }

  return a.join('');
};

console.log(convertNumber(a));