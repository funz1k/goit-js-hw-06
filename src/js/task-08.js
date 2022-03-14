const refs = {
    loginForm: document.querySelector('.login-form'),
    submitBtn: document.querySelector('button'),
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;

    if (email === '' || password === '') {
        alert('Все поля формы должны бать заполнены')
    } else {
        const formData = {
            email, password
        }

        console.log(formData);
        formReset();
    }

}

const formReset = () => {
    refs.loginForm.reset()
}

refs.loginForm.addEventListener('submit', onFormSubmit);
