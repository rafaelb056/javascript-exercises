const leapYears = function(year) {
  let leapCheack;
  if(year % 4 === 0 &&  year % 100 !==0){
    leapCheack = true;
  }else if(year % 400 === 0){
    leapCheack = true;
  }else{
    leapCheack = false;
  }
  return leapCheack;
}

// Do not edit below this line
module.exports = leapYears;
