const input = document.querySelector('#validation-input');
const inputSymbolQuantity = Number(input.dataset.length)

const onBlurChangeColor = (event) => {
    const eventValue = String(event.currentTarget.value)
    if (eventValue.length === inputSymbolQuantity) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
};

input.addEventListener('blur', onBlurChangeColor);