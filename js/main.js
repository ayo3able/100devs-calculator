console.log("Working");
//==================================
// See class 12 simple calculator
//==================================


//When number or operator li is clicked combine them into a mathmatical expression (able to make a long expression not just two numbers and an operator)
//display the mathmatical expression in the display div
// when enter is clicked display the result of the expression

//click event for li elements
let numbers = document.querySelectorAll(".num").forEach(num => {
    num.addEventListener('click', doMath)
})

document.querySelectorAll(".oper").forEach(op => {
    op.addEventListener('click', doMath)
})

function doMath() {
    console.log(numbers);
    
}

//function to do mathmatical expression 


//function when equal sign is pressed