import { dataSoundEffects } from '../database/base.js';

export const faroCards = (dataSearch = null) => {
    const data = dataSearch ? dataSearch : dataSoundEffects;

    const container = document.querySelector('.container.mt-5');
    container.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.setAttribute('class', 'text-center');
    h1.innerHTML = 'Faro';
    container.appendChild(h1);
    const faroSoundEffects = data.filter(value => value.origin === 'Faro');
    const countRows = Math.ceil(faroSoundEffects.length / 3);
    let count = 0;

    for (let i = 0; i < countRows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row mt-5');

        for (let j = 0; j < 3; j++) {
            const cards = `
            <div class="col">
               <div class="card bg-dark text-center" style="width: 18rem;">
                  <div class="card-body">
                     <h5 class="card-title">${faroSoundEffects[count].displayName}</h5>
                     <div class="d-flex justify-content-around mt-5">
                        <button class="btn btn-link" title="Tocar áudio" onclick="play('${faroSoundEffects[count].path}');">
                           <img src="./src/img/play.svg" style="width: 24px; height: 24px;" alt="imagem de play">
                        </button>
                        <button class="btn btn-link" title="Download">
                           <a href="${faroSoundEffects[count].path}" download="${faroSoundEffects[count].displayName}">
                              <img src="./src/img/download.svg" style="width: 24px; height: 24px;" alt="imagem de download">
                           </a>
                        </button>
                        <button class="btn btn-link" title="Compartilhar" onclick="shareEffect('${faroSoundEffects[count].path}', '${faroSoundEffects[count].displayName}');">
                           <img src="./src/img/share.svg" style="width: 24px; height: 24px;" alt="Compartilhar">
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            `;

            rowDiv.innerHTML += cards;

            if (!faroSoundEffects[count + 1]) break;

            count++;
        }

        container.appendChild(rowDiv);
    }
}