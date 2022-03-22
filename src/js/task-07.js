const inputFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text')
spanText.style.fontSize = `${inputFontSize.value}px`


const onChageFontSize = (event) => {
    const fontSizeValue = event.currentTarget.value;
    spanText.style.fontSize = `${fontSizeValue}px`;
};

inputFontSize.addEventListener('input', onChageFontSize);