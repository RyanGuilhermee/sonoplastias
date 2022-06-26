import { dataSoundEffects } from '../database/base.js';
import { allCards } from './all.js';
import { faroCards } from './faro.js';
import { ratinhoCards } from './ratinho.js';

export const search = () => {
    const searchName = document.querySelector('.searchInput').value.toLowerCase();

    if (!searchName.length) {
        allCards();
        return;
    }

    const searchFormatted = searchName.split('').filter((el, i) => {
        if (searchName.charAt(i) !== searchName.charAt(i + 1)) {
            return searchName.charAt(i);
        }
    }).join('');

    const dataFiltered = dataSoundEffects.filter(value => value.name.includes(searchFormatted));

    if (!dataFiltered.length) {
        const container = document.querySelector('.container.mt-5');
        container.innerHTML = '';
        const h5 = document.createElement('h5');
        h5.setAttribute('class', 'text-center');
        h5.innerHTML = 'Não foi possível encontrar.';
        container.appendChild(h5);
        return;
    }

    const origins = {
        ratinho: ratinhoCards,
        faro: faroCards
    };

    const dataFilteredOrigin = dataFiltered[0].origin.toLowerCase();

    origins[dataFilteredOrigin](dataFiltered);
}