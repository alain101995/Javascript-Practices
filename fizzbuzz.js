for(var i = 0; i <= 100; i++){
  if(divisibleThree() && divisibleFive()){
    console.log("FizzBuzz")
  }
  else if(divisibleThree()){
    console.log("Fizz")
  }
  else if (divisibleFive()) {
    console.log("Buzz")
  }
  else{
    console.log(i)
  }
}

function divisibleThree(){
  return i % 3 === 0;
}
function divisibleFive(){
  return i % 5 === 0;
}
