let nums = [2,4,1,5,3];
// let ans = nums.sort(function(a,b){
//   return b-a;
// });
// nums.sort((c,d)=>c-d);
// console.log(nums);
// // console.log(ans)

// let ans = nums.map(p=>p*1.18);
// console.log(ans)

// let ans1 = nums.map(function(p){
//   return  p*2.3;
// })

// console.log(ans1)
// nums.forEach(function(x){
//   console.log(x+5);
// })
// nums.forEach(x=>console.log(x+5));

// let new_nums = nums.map(x=>x*3.14);


// let new_nums = nums.map(function(x){
//   return x*3.14;
// })
// console.log(new_nums);

// let new_nums = nums.filter(function(x){
  
//     return x>4;
  
// });

// let new_nums = nums.filter(x=>x%2!=0);
// console.log(new_nums);

let total = nums.reduce((acc,val)=>acc+val,0);
console.log(total);