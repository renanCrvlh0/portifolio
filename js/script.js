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

// Quando o usuário rolar a página, mostrar ou ocultar o botão
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('topBtn').style.display = 'block';
  } else {
    document.getElementById('topBtn').style.display = 'none';
  }
}

// Quando o usuário clicar no botão, rolar para o topo da página
document.getElementById('topBtn').onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const carousel = document.querySelector('.carrossel');
const slides = carousel.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slidePosition = 0;

function moveToSlide(position) {
  carousel.style.transform = `translateX(-${position}%)`;
}

function updateSlidePosition(position) {
  slidePosition = position;
  if (slidePosition === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  if (slidePosition === slides.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

prevBtn.addEventListener('click', () => {
  slidePosition -= 100 / slides.length;
  moveToSlide(slidePosition);
  updateSlidePosition(slidePosition);
});

nextBtn.addEventListener('click', () => {
  slidePosition += 100 / slides.length;
  moveToSlide(slidePosition);
  updateSlidePosition(slidePosition);
});

updateSlidePosition(slidePosition);
