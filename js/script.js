import { darkMode } from './darkMode.js';
import { ativarFront } from './ativar.js';
import { ativarBack } from './ativar.js';
import { ativarBanco } from './ativar.js';
import { ativarUi } from './ativar.js';
import { ativarFrame } from './ativar.js';
import { desativar } from './ativar.js';

const fechar = document.querySelectorAll('.fechar');
const btnDarkMode = document.querySelector('.btn-darkLight');
const btnYellow = document.querySelector('#amarelo');
const btnBlue = document.querySelector('#azul');
const btnPink = document.querySelector('#rosa');
const btnPurple = document.querySelector('#roxo');
const btnRed = document.querySelector('#vermelho');
const btnGreen = document.querySelector('#verde');

const btnCores = document.querySelector('.aba-cores');

const front = document.querySelector('.front-end');
const back = document.querySelector('.back-end');
const banco = document.querySelector('.banco-dados');
const design = document.querySelector('.ui-ux');
const frame = document.querySelector('.frameworks');
const soft = document.querySelector('.soft-skills');

btnDarkMode.addEventListener('click', darkMode);

const cores = document.querySelectorAll('.cores div');
const doc = document.documentElement;

cores.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.id == 'amarelo') {
      doc.classList.remove('azul');
      doc.classList.remove('rosa');
      doc.classList.remove('roxo');
      doc.classList.remove('vermelho');
      doc.classList.remove('verde');
      doc.classList.add('amarelo');
    } else if (item.id == 'azul') {
      doc.classList.remove('amarelo');
      doc.classList.remove('rosa');
      doc.classList.remove('roxo');
      doc.classList.remove('vermelho');
      doc.classList.remove('verde');
      doc.classList.add('azul');
    } else if (item.id == 'rosa') {
      doc.classList.remove('amarelo');
      doc.classList.remove('azul');
      doc.classList.remove('roxo');
      doc.classList.remove('vermelho');
      doc.classList.remove('verde');
      doc.classList.add('rosa');
    } else if (item.id == 'roxo') {
      doc.classList.remove('amarelo');
      doc.classList.remove('azul');
      doc.classList.remove('rosa');
      doc.classList.remove('vermelho');
      doc.classList.remove('verde');
      doc.classList.add('roxo');
    } else if (item.id == 'vermelho') {
      doc.classList.remove('amarelo');
      doc.classList.remove('azul');
      doc.classList.remove('rosa');
      doc.classList.remove('roxo');
      doc.classList.remove('verde');
      doc.classList.add('vermelho');
    } else if (item.id == 'verde') {
      doc.classList.remove('amarelo');
      doc.classList.remove('azul');
      doc.classList.remove('rosa');
      doc.classList.remove('roxo');
      doc.classList.remove('vermelho');
      doc.classList.add('verde');
    }
  });
});

btnCores.addEventListener('click', () => {
  const containerCores = document.querySelector('.container-cores');
  containerCores.classList.toggle('ativarCores');
});

front.addEventListener('click', ativarFront);
back.addEventListener('click', ativarBack);
banco.addEventListener('click', ativarBanco);
design.addEventListener('click', ativarUi);
frame.addEventListener('click', ativarFrame);

fechar.forEach((item) => {
  item.addEventListener('click', desativar);
});
