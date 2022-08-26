
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
    document.getElementById("results").innerHTML += `<p>Addition: <span>${parseFloat(a+b).toFixed(1)}</span></p>`;
} 

function sub(a,b){
    document.getElementById("results").innerHTML += `<p>Subtraction: <span>${parseFloat(a-b).toFixed(1)}</span></p>`;
}

function multi(a,b){
    document.getElementById("results").innerHTML += `<p>Multiplication: <span>${parseFloat(a*b).toFixed(1)}</span></p>`;
}

function div(a,b){
    document.getElementById("results").innerHTML += `<p>Division: <span>${parseFloat(a/b).toFixed(1)}</span></p>`;
}
