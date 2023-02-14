const btn = document.querySelector('.create-account');
const input = document.querySelector('.list-input');


const check = (name, email, password, confirmPassword) => {
    if (name.length === 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0) throw new Error('Вы не ввели всю информацию !');
    if (!/^[а-яА-Яa-zA-Z ]+$/g.test(name)) throw new Error('Некорректно введено ФИО !');
    if (!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]+$/g.test(email)) throw new Error('Некорректно введенный email !');
    if (password.length <= 7) throw new Error('Пароль должен содержать минимум 8 символов !');
    if (password.split('').sort().join('') != confirmPassword.split('').sort().join('')) throw new Error('Пароли не совпадают !');
    return true;
}     


btn.addEventListener('click', async () => {
    try {
        const name = document.querySelector('.name').value.trim();
        const email = document.querySelector('.email').value.trim();
        const password = document.querySelector('.password').value.trim();
        const confirmPassword = document.querySelector('.confirm-password').value.trim();
        const allUsers = document.querySelector(".allUsers");

        if (check(name, email, password, confirmPassword)) {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name, email: email, password: password })
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            alert(`Вы успешно зарегистрированы в системе, ${jsonResponse[0].name} !`);

            const responseName = await fetch('http://localhost:5000/api/names', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const jsonResponseName = await responseName.json();
            let names = [];
            for (let i = 0; i < jsonResponseName.length; i++)  names.push(jsonResponseName[i].name);
            allUsers.innerHTML = names
        }

    } catch (error) {
        alert(error.message);
    }
});


btn.addEventListener('mouseover', () => btn.style = ' background-color: rgba(101, 108, 241, 0.526)');
btn.addEventListener('mouseout', () => btn.style = 'background-color:8589E4');