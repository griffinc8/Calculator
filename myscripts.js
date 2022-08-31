

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
let digit = 0
let placement = document.querySelector("#placement")
let storage = []

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        
        /* Clear HTML Content In display(placement) each time you click a new button */
        placement.innerHTML = ""
        digit = button.outerText
        storage.push(digit)

        var storageLength = storage.length;
        var base_st = storage[0]

        for (var i = 1; i < storageLength; i++) {
            console.log(storage[i]);
            base_st = base_st.concat(storage[i])  
        }


        const content = document.createElement('div')
        content.innerHTML =  `${Number(base_st)}`
        placement.appendChild(content)
        /* console.log(storage) */
    });
  });









