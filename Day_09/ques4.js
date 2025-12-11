function arr_even(arr){
  for(let num of arr){
    if (num%2==0){
      console.log(num);
    }
  }
}

arr = [1,2,3,4,5,6,7,8,9,10]
arr_even(arr);