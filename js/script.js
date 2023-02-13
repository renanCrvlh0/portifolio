import { darkMode } from './darkMode.js';
import { ativarFront } from './ativar.js';
import { ativarBack } from './ativar.js';
import { ativarBanco } from './ativar.js';
import { ativarUi } from './ativar.js';
import { ativarFrame } from './ativar.js';
import { desativar } from './ativar.js';


const fechar = document.querySelectorAll('.fechar');
const btnDarkMode = document.querySelector('.btn-darkLight');

const front = document.querySelector('.front-end');
const back = document.querySelector('.back-end');
const banco = document.querySelector('.banco-dados');
const design = document.querySelector('.ui-ux');
const frame = document.querySelector('.frameworks');
const soft = document.querySelector('.soft-skills');

btnDarkMode.addEventListener('click', darkMode);

front.addEventListener('click', ativarFront);
back.addEventListener('click', ativarBack);
banco.addEventListener('click', ativarBanco);
design.addEventListener('click', ativarUi);
frame.addEventListener('click', ativarFrame);

fechar.forEach((item) => {
  item.addEventListener('click', desativar);
});

