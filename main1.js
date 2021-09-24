function function1(num1, num2){
    let min;
    if(num1>num2){
        min=num2;
    }
    else{
        min=num1;
    }
    return min;
}
function1(20,10);

 function minimumOfThree(num1, num2, num3){
    let min;
    if(num1<num2){
        min=num1;
    }
    else{
        min=num2;
    }
    if(num3<min){
    min=num3;
    }
    return min

    } 


 minimumOfThree(300, 200, 100)

// maximum of four
  function maxOfFour(num1, num2, num3, num4){
      let max;
      if(num1>num2){
          max=num1;
      }else{
          max=num2;
      }
      if(num3>max){
          max=num3;
      }
      if (num4>max){
          max=num4;
      }
       return max;
      }
     maxOfFour(100, 200, 300, 400)


//ticket machine
   function ticketPrice(age){
      let price;
      if (age<=17){
          price=10;
      }else if(age>=18){
          if(age<65){
              price=20;
          }else{
              price=15;
          }
      }
     return price;
  } 
   ticketPrice(10)
   ticketPrice(20)
   ticketPrice(70)
//sum to
  function sumTo(num){
      let sum= 0;
      for(let i=1; i<=num; i+=1){
          sum=sum+i
      }
      return sum;
  }
  sumTo(5)


// factorial
  function factorial(num){
      let sum=1;
      for(let i=1; i<=num; i+=1){
          sum=sum*i
      }
      return sum;
  }
    factorial(6)
  //fibonacci
  function fib(n){
      if(n==1){return 0}
      if(n==2){return 1}
      return fib(n-2) + fib(n-1)
  }
  fib(4)