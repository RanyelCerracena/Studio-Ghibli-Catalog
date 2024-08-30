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