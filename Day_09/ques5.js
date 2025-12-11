function transformer(){
  return  function upper(str){
    return str.toUpperCase()
  }
}
let x = transformer();

console.log(x("sourav"));
