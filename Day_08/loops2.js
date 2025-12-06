// let count = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log("divisible by 3: ", i);
//     count++;
//   }
// }
//  console.log("Total of numbers that are divisible by 3 are: ",count);

//odd numbers
// let i = 1;
// while(i<=15){
//   if(i%2!=0){
//     console.log(i);
//   }
//   i++;
// }

//table of 5
// for(let i = 1; i<=10; i++){
//   console.log(5,"*",i,"=",5*i);
// }

//prime_num
// let num = 37;
// let is_prime = true;
// for(let i = 2;i<=Math.sqrt(num);i++){
//   if(num%i==0){
//     is_prime = false;
//     break;
//   }
// }
// console.log(num," is prime?",is_prime);

//series of prime num
let last = 50;
for(let num=1;num<=last;num++){
  let is_prime=true;
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i===0){
      is_prime=false;
      break;
    }
    
  }
  if(is_prime)console.log(num);
}