const porcentajeHtml = document.getElementById('porcentajeHtml');
const porcentajeCss = document.getElementById('porcentajeCss');
const porcentajeJs = document.getElementById('porcentajeJs');

const btnMasHtml = document.getElementById('btnMasHtml');
const btnMenosHtml = document.getElementById('btnMenosHtml');

const btnMasCss = document.getElementById('btnMasCss');
const btnMenosCss = document.getElementById('btnMenosCss');

const btnMasJs = document.getElementById('btnMasJs');
const btnMenosJs = document.getElementById('btnMenosJs');

const barraHtml = document.getElementById('barraHtml');
const barraCss = document.getElementById('barraCss');
const barraJs = document.getElementById('barraJs');

const containerHtml = document.getElementById('containerHtml');
const containerCss = document.getElementById('containerCss');
const containerJs = document.getElementById('containerJs');

const finishHtml = document.getElementById('finishHtml');
const finishCss = document.getElementById('finishCss');
const finishJs = document.getElementById('finishJs');

const title = document.getElementById('title');

function createPorcentual(param, btnMas, btnMenos, barra, container, finish) {

let contador = -100;

param.innerHTML = `<h1> ${contador + 100}% </h1>`;

btnMas.addEventListener('click', e => {
    e.preventDefault();
    if(contador <= -1){
        param.innerHTML = `<h1> ${(contador + 1) +100}% </h1>`;
        contador ++;
        barra.style.transform = `translateX(${contador}%)`; 
    }
    if(contador === 0){
        container.style.background = `linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%)`;
        finish.innerHTML = `<h1>Felicidades</h1>`        
    }
});

btnMenos.addEventListener('click', e => {
    e.preventDefault();
    if(contador >= -99){
    param.innerHTML = `<h1> ${(contador - 1) + 100}% </h1>`;
    contador --;
    barra.style.transform = `translateX(${contador}%)`; 
}
});
}

createPorcentual(porcentajeHtml, btnMasHtml, btnMenosHtml, barraHtml, containerHtml, finishHtml);
createPorcentual(porcentajeCss, btnMasCss, btnMenosCss, barraCss, containerCss, finishCss);
createPorcentual(porcentajeJs, btnMasJs, btnMenosJs, barraJs, containerJs, finishJs);
