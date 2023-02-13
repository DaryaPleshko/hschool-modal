const result = document.querySelector('.result'),
    inp = document.querySelector('.inp'),
    img = document.querySelector('.img');

const upArrow = `position: absolute;
background-image: url('C:/Users/Hanna/Desktop/hs/dropdown/img/Chevron2.jpg');
background-repeat: no-repeat;
width: 15px;
height: 15px;
top: 22px;
right: 11px;
`;
const downArrow = `position: absolute;
background-image: url('C:/Users/Hanna/Desktop/hs/dropdown/img/Chevron.jpg');
background-repeat: no-repeat;
width: 15px;
height: 15px;
top: 22px;
right: 11px;
`;

const displaySelection = () => {
    return (!document.querySelector('.result p')) ? true : false;
}

inp.addEventListener('click', () => {
    try {
        img.style = `${upArrow}`;
        if (displaySelection()) {
            const array = ['Businessman', 'Employee', 'Freelancer', 'Retired'];
            for (let i = 0; i < array.length; i++) {
                const p = document.createElement("p");
                p.className = `class-p${i}`;
                p.style = 'padding: 15px 0 15px 15px';
                result.appendChild(p);
                document.querySelector(`.class-p${i}`).innerHTML = array[i];
            }
        } else {
            result.innerHTML = '';
            img.style = `${downArrow}`;
        }
    } catch (error) {
        alert(error.message);
    }
});

result.addEventListener('click', (event) => {
    try {
        inp.value = event.target.textContent;
        img.style = `${downArrow}`;
        result.innerHTML = '';
    } catch (error) {
        alert(error.message);
    }
});

