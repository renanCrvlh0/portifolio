import { darkMode } from './darkMode.js';
import { ativar } from './ativar.js';
import { desativar } from './ativar.js';

const fechar = document.querySelector('.fechar');
const btnDarkMode = document.querySelector('.btn-darkLight');

const front = document.querySelector('.front');

btnDarkMode.addEventListener('click', darkMode);

front.addEventListener('click', ativar);

fechar.addEventListener('click', desativar);
