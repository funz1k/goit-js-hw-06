const input = document.querySelector('#validation-input');


const onBlurChangeColor = (event) => {
    const eventValue = String(event.currentTarget.value)
    if (eventValue.length <= 6) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
};

input.addEventListener('blur', onBlurChangeColor);