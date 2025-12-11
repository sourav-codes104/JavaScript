function greet(){
  return function meet(){

    console.log("meet after greet");
  };
}

let c = greet();
c();