// Botões de proximo e anterior para os filmes
let btnNext = document.querySelector('.next-films');
let btnBack = document.querySelector('.back-films');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let thumb = document.querySelector('.container .thumb');


btnNext.onclick = () => moveItemsOnClick('next');
btnBack.onclick = () => moveItemsOnClick('back');

function moveItemsOnClick(type){
    let listItems = document.querySelectorAll('.list .list-item');
    let thumbItems = document.querySelectorAll('.thumb .thumb-item');

    if(type === 'next'){
        list.appendChild(listItems [0]);
        thumb.appendChild(thumbItems [0]);
        container.classList.add('next');
    } else {
        list.prepend(listItems [listItems.length -1]);
        thumb.prepend(thumbItems [thumbItems.length -1]);
        container.classList.add('back');
    }

    setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('back');
    }, 500);
}

const openModalButtons = document.querySelectorAll('.modal-button');
const closeModalButtons = document.querySelectorAll('.close-modal');

function openModal(modal) {
    modal.classList.add('visible');
}
function closeModal(modal) {
    modal.classList.remove('visible');
}

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Seleciona o modal mais próximo associado ao botão clicado
        const modal = button.closest('.list-item').nextElementSibling;
        if (modal) {
            openModal(modal);
        }
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Seleciona o modal associado ao botão de fechar
        const modal = button.closest('.fade-modal');
        if (modal) {
            closeModal(modal);
        }
    });
});