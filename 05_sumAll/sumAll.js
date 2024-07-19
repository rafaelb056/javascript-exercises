const sumAll = function(num1, num2){
  let error = 'ERROR';
  if( num1 < 0 || num2 < 0) return error;
  if(typeof num1 === "string"|| typeof num2 === "string"){
    return error;
  }else if(typeof num1 === "object" || typeof num2 === "object"){
    return error;
  } 
  if(num1 > num2){
    let aux = num1;
    num1 = num2;
    num2 = aux;
  }
  let sumfinal = num1;
  for(num1 = num1 + 1; num1 <= num2; num1++){
    sumfinal += num1;
  }
  return sumfinal;
};

// Do not edit below this line
module.exports = sumAll;
