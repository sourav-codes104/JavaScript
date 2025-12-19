// Write a program to find the largest of 3 numbers
// Print numbers from 1 to 100 but skip multiples of 5
// Check whether a number is prime
// Reverse a number using a loop
// Count digits in a number
// Find factorial using a function
// Check if a number is palindrome
// Sum of digits of a number
// Print Fibonacci series up to n
// Swap two numbers without using a third variable

//1 Write a program to find the largest of 3 numbers
// let a = 12, b= 34, c= 9;
// if(a>b && a>c){
//   console.log(a,"is the greatest");
// }
// else if(b>a && b>c){
//   console.log(b,"is the greatest");
// }
// else{
//   console.log(c,"is the greatest");
// }

//2 Print numbers from 1 to 100 but skip multiples of 5
// for(let i=1; i<=100; i++){
//   if(i%5!==0){
//     console.log(i);
//   }
// }

//3 Check whether a number is prime
// const num = 23;
// let is_prime = true;
// for(let i=2;i<=Math.sqrt(num);i++){
//   if(num%i==0){
//     is_prime = false;
//   }
// }
// if (is_prime){
//   console.log(num,"is a prime number");
// }
// else{
//   console.log(num,"is a composite number");
// }

//4 Reverse a number using a loop
// let num = 12346, rev = 0;
// while(num){
  
//   rev=rev*10+(num%10);
//   num=Math.floor(num/10);
// }
// console.log(rev)

//5 Count digits in a number
// let nums = 1234578, count = 0;
// while(nums){
//   count += 1;
//   nums=Math.floor(nums/10);
// }
// console.log(count);

//6 Find factorial using a function
// let fun = (num,fact)=>{
//   for(let i = 1; i<=num; i++){
//     fact = fact*i;
//   }
//   return fact;
// }
// let ans = fun(6,1);
// console.log(ans);

//7 Check if a number is palindrome
// let num = 12356321, rev = 0, og = num;
// while(num){
//   rev = rev*10+(num%10);
//   num = Math.floor(num/10);
// }
// if(rev===og){
//   console.log("Number is Palindrome");
// }
// else{
//   console.log("Number is not Palindrome")
// }

//8 Sum of digits of a number
// let num = 45639, sum = 0;
// while(num){
//   sum+=num%10;
//   num=Math.floor(num/10);
// }
// console.log(sum);

//9 Print Fibonacci series up to n
// let num1 = 0, num2 = 1, n = 10, fib = 0;
// for(let i = 2; i<n; i++){
//   fib = num1+num2;
//   num1 = num2;
//   num2 = fib;
// }
// console.log(fib);

//10 Swap two numbers without using a third variable
//method 1
// let a = 6, b = 10;
// console.log("a and b before swapping");
// console.log(a , b);
// console.log("---------------------");
// a = a+b;
// b = a-b;
// a = a-b;
// console.log("a and b after swapping");
// console.log(a , b);

//method 2
// let a = 6, b = 10;
// console.log("a and b before swapping");
// console.log(a , b);
// console.log("---------------------");
// a = a^b;
// b = a^b;
// a = a^b;
// console.log("a and b after swapping");
// console.log(a , b);

//method 3
// let a = 6, b = 10;
// console.log("a and b before swapping");
// console.log(a , b);
// console.log("---------------------");
// [a,b]=[b,a];
// console.log("a and b after swapping");
// console.log(a , b);