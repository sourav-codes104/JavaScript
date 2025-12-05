function grade(marks){
if (marks >= 91){
  return "A";
}
else if(marks >= 81){
  return "B";
}
else if(marks >= 71){
  return "C";
}
else if(marks >= 61){
  return "D";
}
else if(marks >= 51){
  return "E";
}
else{
  
  return "F";
}
}
console.log(grade(72));