let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    btn.textContent = "Stwórz 10 el listy";
    document.body.appendChild(btn);

    const clearBtn = document.createElement('button');
    clearBtn.textContent = "Wyczyść listę";
    clearBtn.style.marginLeft = "10px";
    document.body.appendChild(clearBtn);


    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    btn.addEventListener("click", createLiElements);
    clearBtn.addEventListener("click", clearClist);

}

const createLiElements = () => {
    for (let i = 1; i <= 10; i++) {
        const newLi = document.createElement('li');
        document.querySelector('ul').appendChild(newLi);
        newLi.textContent = `Element numer ${orderElement++}`;
        newLi.style.fontSize = `${size++}px`;
    }
}

const clearClist = () => {
    size = 10;
    orderElement = 1;
    document.querySelector('ul').textContent = "";
}

init()