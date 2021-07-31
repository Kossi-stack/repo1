module.exports = function sumFibs(num, total = [1, 1])  {

  const n = total[total.length - 1] + total[total.length - 2];

  if(n > num){

    return total;

  }

  if(n %2 ==0){
    total.push(n);
  }

 return sumFibs(num, total);

}