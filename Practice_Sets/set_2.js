// Find the maximum element in an array
// Find the second largest element in an array
// Reverse an array (without using reverse())
// Count even and odd numbers in an array
// Remove duplicate elements from an array
// Check if an array is sorted
// Rotate array left by 1
// Find sum of all elements
// Find index of a given element
// Merge two arrays into one

// 1 Find the maximum element in an array
// let nums = [21,53,97,72,43,77,3,12];
// let max = nums[0];
// for(let i = 1; i < nums.length; i++){
//   if(nums[i]>max){
//     max = nums[i];
//   }
// }
// console.log("Max element is:",max);

// 2 Find the second largest element in an array
// let nums = [21,53,97,91,43,77,3,12];
// let max = -Infinity;
// let sec_max = -Infinity;
// for(let i = 0; i < nums.length; i++){
//   if(nums[i]>max ){
//     sec_max = max;
//     max = nums[i];
//   }
//   else if(nums[i]>sec_max && nums[i]!=max){
//     sec_max=nums[i];
//   }
// }
// console.log("seocnd Max element is:",sec_max);

// 3 Reverse an array (without using reverse())
// let arr = [1,2,3,4,5];
// let first = 0, last = arr.length-1;
// while(first<=last){
//   // let temp = arr[first];
//   // arr[first] = arr[last];
//   // arr[last] = temp;
//   [arr[first],arr[last]] = [arr[last],arr[first]];
//   first++;
//   last--;
// }
// console.log(arr);

// 4 Count even and odd numbers in an array
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let even_count = 0, odd_count = 0;
// for(let x of arr){
//   if(x%2===0){
//     even_count++;
//   }
//   else{
//     odd_count++;
//   }
// }
// console.log("Total odd count is:",odd_count);
// console.log("Total even count is:",even_count);

// 5 Remove duplicate elements from an array
// let arr = [1,3,4,3,2,6,1,2];
// arr.sort((a,b)=>a-b);
// for(let i = 0; i<arr.length; i++){
//   if(arr[i]==arr[i+1]){
//     arr.splice(i,1);
//   }
// }
// console.log(arr);

// 6 Check if an array is sorted
// let arr = [3,4,2,1,5];
// let is_sorted = true;
// for(let i=1; i<arr.length; i++){
//   if(arr[i] <= arr[i-1]){
//     is_sorted = false;
//     break;
//   }
// }
// console.log(is_sorted?"Array is sorted":"Array is unsorted");

// 7 Rotate array left by 1
// step 1 : rverse the first k array
// step 2 : and then the remaining one
// step 3 : and last reverse the whole array
// let arr = [1,2,3,4,5];
// console.log(arr);
// let k = 1;
// k = k%arr.length;
// let p = 0, q = k-1;
// while(p<q){
//   let temp = arr[p];
//   arr[p] = arr[q];
//   arr[q] = temp;
//   p++;
//   q--;
// }
// console.log(arr);
// let a = k, b = arr.length-1;
// while(a<b){
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
//   a++;
//   b--;
// }
// console.log(arr);

// let i = 0, j = arr.length-1;
// while(i<j){
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

// 8 Find sum of all elements
// let arr = [1,2,3,4,5];
// let sum = arr.reduce((acc,val)=>acc+val,0);
// console.log(sum);

// 9 Find index of a given element
// let arr = [1,2,3,4,5];
// let ele = 3;
// let index = arr.findIndex(x=>x===ele);
// console.log(index);

// 10 Merge two arrays into one
// let arr_1 = [1,2,3,4,5];
// let arr_2 = [6,7,8,9,10];
// let new_arr = [...arr_1,...arr_2]
// console.log(new_arr);