const decrementBtn = document.querySelector('#counter button[data-action="decrement"]')
const incrementBtn = document.querySelector('#counter button[data-action="increment"]')
const valueDisplay = document.querySelector('#value')
let count = 0;


decrementBtn.addEventListener('click', () => {
    count -= 1
    updateDisplay()
})

incrementBtn.addEventListener('click', () => {
    count += 1
    updateDisplay()
})

const updateDisplay = (value) => {
    valueDisplay.textContent = count
}

