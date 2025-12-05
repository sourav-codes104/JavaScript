function personality(age){
  if (age > 50)return "old uncle";
  else if(age > 40)return "the mid of life";
  else if(age > 30)return "adult people";
  else if(age >20)return "young gooners";
  else if(age > 15)return "teenagers";
  else if(age > 10)return "kids";
  else if(age > 5)return "small-kids";
  else if(age >1)return "babies";
  else return "infants";
  }


console.log(personality(26));