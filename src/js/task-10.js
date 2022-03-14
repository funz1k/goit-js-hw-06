const refs = {
  divContainer: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
}


function createBoxes(amount) {
  const boxes = [];
  let value = 20;
  for (let i = 0; i < amount; i++) {
    value += 10;
    const boxEl = document.createElement('div');
    boxEl.style.width = `${value}px`;
    boxEl.style.height = `${value}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxes.push(boxEl)
  }
  refs.divContainer.append(...boxes)
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onCreateTargetClick = (event) => {
  const boxesValue = refs.input.value
  createBoxes(boxesValue)
}

const onDestroyTargetClick = (event) => {
  refs.divContainer.innerHTML = ''
}

refs.createBtn.addEventListener('click', onCreateTargetClick);
refs.destroyBtn.addEventListener('click', onDestroyTargetClick);