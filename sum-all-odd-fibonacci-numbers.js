module.exports = function (num) {

  let n1 = 1,
    n2 = 1,
    sum = 1;
  while (n2 <= num) {
    if (n2 % 2 !== 0) {
      sum += n2;
    }
    let x = n2;
    n2 = n1 + n2;
    n1 = x;
  }
  return sum;
};