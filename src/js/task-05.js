const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

const onInputChange = (event) => {
    const currentEvent = event.currentTarget.value
    // let regexp = / /gm;
    if (currentEvent.trim() === '' || currentEvent === '') {
        return refs.output.textContent = 'Anonymous'
    } else refs.output.textContent = currentEvent

}


refs.input.addEventListener('input', onInputChange);