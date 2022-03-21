const refs = {
  colorName: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const onChangeTargetClick = (event) => {
  const colorHex = refs.colorName.textContent = getRandomHexColor();
  changeBodyColor(colorHex);
  console.log(colorHex);
};

const changeBodyColor = (value) => {
  refs.body.style.backgroundColor = value;
  console.log(value);
};

refs.changeColorBtn.addEventListener('click', onChangeTargetClick);