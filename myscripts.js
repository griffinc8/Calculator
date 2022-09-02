

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
let chosen_operator = []
let storage = [];
let storage1 = []

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        
        /* Clear HTML Content In display(placement) each time you click a new button */

        if (chosen_operator.length == 0) {
            if (button.className == "button") {

                placement.innerHTML = ""

                /* this puts the first element in the storage list */
    
                let digit = button.outerText
                storage.push(digit)

                /* used both base_st and storage to concatenate them together although they are the same.
                 I am essentially concaetenating it with itself*/
        
                var storageLength = storage.length;
                var base_st = storage[0]
                
    
                /* takes base_st and concatenates it */
                for (var i = 1; i < storageLength; i++) {
                    base_st = base_st.concat(storage[i])  
                }
                let combined_number = Number(base_st)
        
                const content = document.createElement('div')
                content.innerHTML =  `${combined_number}`
                placement.appendChild(content)
                
            } else if (button.className == "button operator") {
                operators.forEach((operator) => {
                    operator.addEventListener("click", () => {
                        placement.innerHTML = ""
                        chosen_operator.push(operator.outerText)
                    })
                })            
            }
    
        console.log(chosen_operator)
        }
        
    });
});


/* I want chosen operator to only have one thing in it */