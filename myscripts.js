

/* Here I'm Going to make the operation functions */

function add(num1, numb) {
    return num1 + num2
}

function subtract(numr1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}




/* declare variable before forEach function */
let buttons = document.querySelectorAll(".button");
let placement = document.querySelector("#placement");
let operators = document.querySelectorAll(".button.operator")
let storage = [];

console.log(buttons.className)

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        
        /* Clear HTML Content In display(placement) each time you click a new button */

        if (button.className == "button") {

            placement.innerHTML = ""

            let digit = button.outerText
            storage.push(digit)
    
            var storageLength = storage.length;
            var base_st = storage[0]
    
            for (var i = 1; i < storageLength; i++) {
                base_st = base_st.concat(storage[i])  
            }
    
            const content = document.createElement('div')
            content.innerHTML =  `${Number(base_st)}`
            placement.appendChild(content)
            
        } else if (button.className == "button operator") {
            operators.forEach((operator) => {
                operator.addEventListener("click", () => {
                    placement.innerHTML = ""
                })
            })            
        }




    });
  });



/* I think we have to have all buttons share a class.
 But need to have three classes to distinguish whether the button is an operator or a number */