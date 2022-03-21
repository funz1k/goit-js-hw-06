const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

const onInputChange = (event) => {
    if (event.currentTarget.value === '') {
        return refs.output.textContent = 'Anonymous'
    } else refs.output.textContent = event.currentTarget.value

}


refs.input.addEventListener('input', onInputChange);