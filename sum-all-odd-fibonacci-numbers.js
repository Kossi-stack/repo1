module.exports = function (num) {
  // write your code here
 function sumFibs(num) {
  let m = 0
  let n = 1
  let count = 0
  while (n <=num) {
    [n, m] = [n+m, n]
    if (n%2 !==0){
      count+= n
    }
  }
  return count;
}
}