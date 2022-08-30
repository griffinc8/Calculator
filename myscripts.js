









/* declare variable before forEach function */
let buttons = document.querySelectorAll(".button");
let number = 0
let placement = document.querySelector("#placement")

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        number = Number(button.outerText)
        const content = document.createElement('div')
        content.innerHTML =  `${number}`
        placement.appendChild(content)
    });
  });









