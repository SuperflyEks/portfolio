const previous = document.querySelector('.left');
const next = document.querySelector('.right');
const carousel = document.querySelector('.card-container');
import card  from '../javascript/card';
const slides = document.querySelector(card);

let currentIndex = 0;


const moveCards = (e) => {
    if (e === 'prev') {
        currentIndex += 100;
    } else if (e === 'next') {
        currentIndex -= 100;
    }

    if (currentIndex > 0) {
        currentIndex = 0;
    } else if (currentIndex < -(slides.length - 1) * 100) {
        currentIndex = -(slides.length - 1) * 100;
    }


    carousel.style.transform = `translateX(${currentIndex}%)`;
}


previous.addEventListener('click', () => moveCards('prev'));

next.addEventListener('click', () => moveCards('next'));