import { darkMode } from './darkMode.js';
import { ativarFront } from './ativarHabilidades.js';
import { ativarBack } from './ativarHabilidades.js';
import { ativarBanco } from './ativarHabilidades.js';
import { ativarUi } from './ativarHabilidades.js';
import { ativarFrame } from './ativarHabilidades.js';
import { desativar } from './ativarHabilidades.js';

const fechar = document.querySelectorAll('.fechar');
const btnDarkMode = document.querySelector('.btn-darkLight');
const btnYellow = document.querySelector('#amarelo');
const btnBlue = document.querySelector('#azul');
const btnPink = document.querySelector('#rosa');
const btnPurple = document.querySelector('#roxo');
const btnRed = document.querySelector('#vermelho');
const btnGreen = document.querySelector('#verde');

const btnCores = document.querySelector('.aba-cores');
const btnApagarCor = document.querySelector('#apagar');

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
    const classesPorId = {
      laranja: 'laranja',
      amarelo: 'amarelo',
      azul: 'azul',
      rosa: 'rosa',
      roxo: 'roxo',
      vermelho: 'vermelho',
      verde: 'verde',
    };

    if (classesPorId.hasOwnProperty(item.id)) {
      const classe = classesPorId[item.id];
      doc.classList.remove(...Object.values(classesPorId));
      doc.classList.add(classe);
    }
  });
});

btnCores.addEventListener('click', () => {
  const containerCores = document.querySelector('.cores');
  containerCores.classList.toggle('slide-in-blurred-left');
});

btnApagarCor.addEventListener('click', () => {
  const classesParaRemover = [
    'laranja',
    'amarelo',
    'azul',
    'rosa',
    'roxo',
    'vermelho',
    'verde',
  ];

  if (classesParaRemover.some((classe) => doc.classList.contains(classe))) {
    classesParaRemover.forEach((classe) => doc.classList.remove(classe));
  }
});

front.addEventListener('click', ativarFront);
back.addEventListener('click', ativarBack);
banco.addEventListener('click', ativarBanco);
design.addEventListener('click', ativarUi);
frame.addEventListener('click', ativarFrame);

fechar.forEach((item) => {
  item.addEventListener('click', desativar);
});



const slider = document.querySelectorAll('.slider');

const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

let idx = 0;

function esconderSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function mostrarSlider() {
  slider[idx].classList.add('on');
}

function nextSlider() {
  esconderSlider();

  if(idx == slider.length -1) {
    idx = 0;
  } else {
    idx++;
  }

  mostrarSlider();
}

function prevSlider() {
  esconderSlider();

  if(idx == 0) {
    idx = slider.length -1;
  } else {
    idx--;
  }

  mostrarSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

console.log(slider);