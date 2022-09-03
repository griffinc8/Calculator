

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
let storage = [];
let storage1 = [];
let first_number = 0
let second_number = 0
let digit = 0
let digit1 = 0
let final = 0
let to_next_number = 0




buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        
        if (button.id == "AC") {
            placement.innerHTML = ""
            first_number = 0
            second_number = 0 
            to_next_number = 0
            storage = []
            storage1 = []
            return
        }

        if (to_next_number == 0) {
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
                
            }           
        }

        if (button.className == "button operator") {
            placement.innerHTML = ""
            chosen_operator = button.outerText
            placement.innerHTML = `${button.outerText}` 
            to_next_number += 1 
        
        } 
        
        if (to_next_number == 1) {
            if (button.className == "button") {
                placement.innerHTML = ""
                let digit1 = button.outerText
                storage1.push(digit1)
    
                var storage1Length = storage1.length;
                var base_st1 = storage1[0]
                for (var i = 1; i < storage1Length; i++) {
                    base_st1 = base_st1.concat(storage1[i])  
                }
                second_number = Number(base_st1)
    
                const content = document.createElement('div')
                content.innerHTML = `${second_number}`
                placement.appendChild(content)   
                
            }
        }     

             
        if (button.id == "equal") {
            placement.innerHTML = ""
            const content = document.createElement('div')
            let final = operate(first_number, second_number, chosen_operator)  
            console.log(final)
            content.innerHTML = `${final}`
            placement.appendChild(content);
            to_next_number = 0
            

        }
    });
});


/* I want chosen operator to only have one thing in it */