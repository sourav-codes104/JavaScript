function add(...val){
  let sum=0;
  for(let num of val){
    sum=sum+num;
  }
  return sum;
}

console.log(add(1,2,3,4,5))