// let select  = document.querySelector(".box");
// let default_color = "blue";
// select.addEventListener("dblclick",()=>{
//   if(default_color==="blue"){
//     default_color = "red";
//     select.style.backgroundColor ="red";
// }else{
//   default_color = "blue";
//   select.style.backgroundColor="blue";
// }
// console.log("event occured");
// })

// let select  = document.querySelector(".name");
// select.addEventListener("input",(result)=>{
//   console.log(result);
// })

let select  = document.querySelector(".heading");
let select_2 = document.querySelector(".choose");
let data;
select_2.addEventListener("change",(data)=>{
  // console.log(data.target.value);
  select.textContent = `${data.target.value} Device Selected`
  
})