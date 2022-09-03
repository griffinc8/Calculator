

/* Here I'm Going to make the operation functions */

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operation) {
    if (operation == "+") {
        return add(num1, num2)
    } else if (operation == "-") {
        return subtract(num1, num2)
    } else if (operation == "x") {
        return multiply(num1, num2)
    } else {
        return divide(num1, num2)
    }
}




/* declare variable before forEach function */
let buttons = document.querySelectorAll(".button");
let placement = document.querySelector("#placement");
let operators = document.querySelectorAll(".button.operator")
let chosen_operator = [];
let storage = [];
let storage1 = [];
let combined_number = 0
let digit = "a"
let digit1 = "b"


buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        
        /* Clear HTML Content In display(placement) each time you click a new button */
        
        if (chosen_operator.length == 0) {
            if (button.className == "button") {

                placement.innerHTML = ""

                /* this puts the first element in the storage list */
    
                digit = button.outerText
                storage.push(digit)

                /* used both base_st and storage to concatenate them together although they are the same.
                 I am essentially concaetenating it with itself*/
                var storageLength = storage.length;
                var base_st = storage[0]
                for (var i = 1; i < storageLength; i++) {
                    base_st = base_st.concat(storage[i])  
                }
                first_number = Number(base_st)

                /*append a div with combined number to the display */
                const content = document.createElement('div')
                content.innerHTML =  `${first_number}`
                placement.appendChild(content)
                
            } else if (button.className == "button operator") {
                operators.forEach((operator) => {
                    operator.addEventListener("click", () => {
                        placement.innerHTML = ""
                        chosen_operator.push(operator.outerText)
                    })
                })            
            }
        
        } else {
            digit1 = button.outerText
            storage1.push(digit1)

            var storage1Length = storage1.length;
            var base_st1 = storage1[0]
            for (var i = 1; i < storage1Length; i++) {
                base_st1 = base_st1.concat(storage1[i])  
            }
            second_number = Number(base_st1)

            const content = document.createElement('div')
            content.innerHTML = `${operate(first_number, second_number, chosen_operator[0])}`
            placement.appendChild(content)
    
        }


        
    });
});


/* I want chosen operator to only have one thing in it */