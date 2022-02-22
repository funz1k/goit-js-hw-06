const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

const listEl = document.querySelectorAll('.item ul');
const titleEl = document.querySelectorAll('h2')

    listEl.forEach((element, index) => {
        console.log('Category:', titleEl[index].textContent);
        console.log('Elements:', element.children.length);
    })






