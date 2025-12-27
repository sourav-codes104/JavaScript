// Find the missing number in an array of 1…n
// Find all pairs with sum = target
// Move all zeros to the end
// Find frequency of each element
// Find intersection of two arrays
// Find union of two arrays
// Find longest increasing subarray
// Check if array is palindrome
// Split array into chunks of size k
// Remove element at a given index without using splice()

// 1 Find the missing number in an array of 1…n
// let arr = [1,2,3,4,6,7,8,10,12,16,18,19,23,24,26,29,30,33,34,35,37];
// let max = 38;
// let set = new Set(arr);
// let missing = [];
// for(let i=1;i<=max;i++){
//   if(!set.has(i)){
//     missing.push(i);
//   }
// }
// console.log(missing);

// 2 Find all pairs with sum = target
// let arr = [[4,5],[6,7],[3,6],[4,4],[9,0]];
// let target = 9, sum = 0;
// let pair=[];
// // console.log(arr);
// for(let i=0; i<arr.length; i++){
//   sum = arr[i][0]+arr[i][1];
//   if(sum===target){
//     pair.push(arr[i]);
//   }
// }
// console.log(pair);

// 3 Move all zeros to the end
let arr = [0,1,0,2,4,0,3,5,0];
let j = 0;

for(let i=0;i<arr.length;i++){
  if(arr[i]!==0){
    if(i!==j){
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    }
    j+=1;
  }
}
console.log(arr);