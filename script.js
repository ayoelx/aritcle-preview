let btn = document.querySelector('.share-btn');
btn.addEventListener('click', pop);

function pop() {
    document.querySelector('.footer').classList.toggle('popped');
}