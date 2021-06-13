const popup = document.querySelector('.popup');
const popupButtonOpen = document.querySelector('.popup-link');
const popupButtonClose = document.querySelector('.popup-close');

popupButtonOpen.addEventListener('click',() => {
    popup.classList.add('open');
    popup.classList.replace('close', 'open');
})
popupButtonClose.addEventListener('click',() => {
    popup.classList.replace('open', 'close');
})