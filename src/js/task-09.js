const refs = {
  colorName: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
}

const onChangeTargetClick = (event) => {
  refs.colorName.textContent = getRandomHexColor();
  changeBodyColor();
};

const changeBodyColor = () => {
  refs.body.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

refs.changeColorBtn.addEventListener('click', onChangeTargetClick);