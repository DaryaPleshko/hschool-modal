const btn = document.querySelector('.create-account');


const check = (name, email, password, confirmPassword) => {
    if (name.length === 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0) throw new Error('Вы не ввели всю информацию !');
    if (!/^[а-яА-Яa-zA-Z ]+$/g.test(name)) throw new Error('Некорректно введено ФИО !');
    if (!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]+$/g.test(email)) throw new Error('Некорректно введенный email !');
    if (password.length <= 7) throw new Error('Пароль должен содержать минимум 8 символов !');
    if (password.split('').sort().join('') != confirmPassword.split('').sort().join('')) throw new Error('Пароли не совпадают !');
    return true;
}


btn.addEventListener('click', () => {
    try {

        const name = document.querySelector('.name').value.trim();
        const email = document.querySelector('.email').value.trim();
        const password = document.querySelector('.password').value.trim();
        const confirmPassword = document.querySelector('.confirm-password').value.trim();

        if (check(name, email, password, confirmPassword)) alert('Вы успешно зарегистрированы в системе');

    } catch (error) {
        alert(error.message);
    }
});


btn.addEventListener('mouseover', () => btn.style = 'background-color:pink');п
btn.addEventListener('mouseout', () => btn.style = 'background-color:8589E4');