console.log("Working");
//==================================
// See class 12 simple calculator
//==================================
// display string in the display div
// insert the value of the number(s) or operator(s) into a mathmatical expression: eval("1st-number operator 2nd-number")
// return result of equation
//display result in the display div: join(" ")

//if click event value !== equal sign then push value to the end of array: arr.push(value)

//get the value of the list item that was clicked:
let listItems = document.querySelectorAll("li")
//element.addEventListener("click", doMath)
let mathArr = []

listItems.forEach(function(elem){
    elem.addEventListener("click", function(){
        let value = elem.textContent.toString()

        if (value !== "=" ){
            mathArr.push(value)
           
           //  display array as a string in div: 
           
             document.getElementById("display").innerHTML = mathArr.join("")
           
           }else if (value === "="){
            
           let result = eval(mathArr.join(""))
            document.getElementById("display").innerHTML = result
           } 
    })
})

//=================================
//Reset claculator
//=================================
document.getElementById("clear")?.addEventListener("click", clear)

function clear(){
    mathArr.length = 0
     document.getElementById("display").innerHTML =""
}




