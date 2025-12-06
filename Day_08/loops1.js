let arr=[1,2,3,4];

arr.forEach(a=>console.log(a));

for(let x of arr){
  console.log(x);
}

let double = arr.map(v=>v*2);
console.log(double);

let sum = arr.reduce((a,b)=>a+b,0);
console.log(sum);