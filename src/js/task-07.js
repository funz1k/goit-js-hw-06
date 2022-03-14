const inputFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text')

const onChageFontSize = (event) => {
    const fontSizeValue = Number(event.currentTarget.value);
    spanText.style.fontSize = `${fontSizeValue}px`;
};

inputFontSize.addEventListener('input', onChageFontSize);