function bmi_calculator(weight,height){
  let height_in_m = height/100;
  let bmi = weight/(height_in_m*height_in_m);
  return bmi;
}

console.log(bmi_calculator(68,200));