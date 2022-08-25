
function calculate(){
    let num1 = Number(prompt("Enter the first number"));
    let num2 = Number(prompt("Enter the second number"));
    sum(num1,num2); 
    sub(num1,num2);
    multi(num1,num2);
    div(num1,num2);
    console.log(num1, num2);
}

function sum(a,b){
    document.getElementById("results").innerHTML += `<p>The sum is: <span>${a+b}</span></p>`;
} 

function sub(a,b){
    document.getElementById("results").innerHTML += `<p>The subtraction is: <span>${a-b}</span></p>`;
}

function multi(a,b){
    document.getElementById("results").innerHTML += `<p>The multiplication is: <span>${a*b}</span></p>`;
}

function div(a,b){
    document.getElementById("results").innerHTML += `<p>The division is: <span>${a/b}</span></p>`;
}
