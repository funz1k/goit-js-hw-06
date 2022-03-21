const decrementBtn = document.querySelector('#counter button[data-action="decrement"]')
const incrementBtn = document.querySelector('#counter button[data-action="increment"]')
const valueDisplay =  document.querySelector('#value')
let count = 0;


decrementBtn.addEventListener('click', () => {
    updateDisplay(count -= 1)
})

incrementBtn.addEventListener('click', () => {
    updateDisplay(count += 1)
})

const updateDisplay = (value) => {
    valueDisplay.textContent = count
}

