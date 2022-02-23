const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')


const ingredientsEl = options =>  {
  return options.map(element => {
  const listEl = document.createElement('li')
  listEl.textContent = element
  listEl.classList.add('item')
  return listEl
})};

ingredientsList.append(...ingredientsEl(ingredients))


