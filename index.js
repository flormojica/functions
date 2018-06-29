function add (a,b){
let result= 0;
for(let i = 0; i < b; i++){
    result = a+b;
}
return result;
}
const answer = add(2,4)
document.getElementById('Addition').innerHTML = "your total is: "+answer;

function multiply (a, b){
        let result2 = 0;
    for (let i = 0; i < b; i++){
         add(a, result2);
         result2= result2 + a
    }
  return result2;
}
const numbers = multiply(6,8);
document.getElementById('Multiplication').innerHTML = "your total is: "+numbers;

function Power(x, n){
let total = x;
for (let i = 1; i < n; i++){
    total = total * x;
}
return total;  
}
const powered = Power(2, 8);
document.getElementById('Power').innerHTML = 'Your Total is: '+powered;



