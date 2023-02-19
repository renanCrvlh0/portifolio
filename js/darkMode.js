export function darkMode() {
  const doc = document.documentElement.classList.toggle('dark');

  const btnDarkLight = document.querySelector('#darkMode');
  const iconMode = document.querySelector('.light-mode');

  if (iconMode.textContent == 'dark_mode') {
    iconMode.textContent = 'light_mode';
  } else if (iconMode.textContent == 'light_mode') {
    iconMode.textContent = 'dark_mode';
  }
}

export function yellowMode() {
  const doc = document.documentElement.classList.toggle('amarelo');

  // if (doc.classList.contains('azul')) {
  //   doc.classList.remove('azul');
  //   doc.classList.add('amarelo');
  // }
}

// export function corMode(cor) {
//   const doc = document.documentElement;
//   const cores = document.querySelectorAll('.cores div');

//   console.log(cores);

//   cores.forEach((item) => {
//     item.addEventListener('click', () => {
//       doc.classList.add(cor);
//     });
//   });

// if (cores.length) {
//   cores[0].classList.add('ativo');

//   if (cores[0].classList.contains('ativo')) {
//     doc.classList.add(cor);
//   }

// function ativar(index) {
//   cores.forEach((color) => {
//     color.classList.remove('ativo');
//   });
//   cores[index].classList.add('ativo');
// }
// cores.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     ativar(index);
//   });
// });
// }
// const cores = document.querySelectorAll('.cores div');
// cores.forEach((index) => {
//   index.addEventListener('click', coresMode);
// });

// const doc = document.documentElement.classList.toggle('azul');
// }

export function pinkMode() {
  const doc = document.documentElement.classList.toggle('rosa');
}

export function purpleMode() {
  const doc = document.documentElement.classList.toggle('roxo');
}

export function redMode() {
  const doc = document.documentElement.classList.toggle('vermelho');
}

export function greenMode() {
  const doc = document.documentElement.classList.toggle('verde');
}
