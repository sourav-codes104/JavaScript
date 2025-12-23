let act = document.querySelector(".subs");
let mode = "light";
act.addEventListener("click",()=>{
  if(mode==="light"){
    mode = "dark";
    document.querySelector("body").style.backgroundColor="black";
  }else{
    mode = "light";
    document.querySelector("body").style.backgroundColor="white";
  }
  console.log("event occured");
});