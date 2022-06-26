import { allCards } from './all.js';
import { faroCards } from './faro.js';
import { ratinhoCards } from './ratinho.js';
import { search } from './search.js';

onload = () => {
    allCards();
}

const allFilter = document.querySelector('.all');
const ratinhoFilter = document.querySelector('.ratinho');
const faroFilter = document.querySelector('.faro');
const searchInput = document.querySelector('.searchInput');
const playBtn = document.querySelector('.play');

allFilter.addEventListener('click', () => {
    allCards();
});

ratinhoFilter.addEventListener('click', () => {
    ratinhoCards();
});

faroFilter.addEventListener('click', () => {
    faroCards();
});

searchInput.addEventListener('keyup', () => {
    search();
});


