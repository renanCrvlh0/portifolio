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
}

export function blueMode() {
  const doc = document.documentElement.classList.toggle('azul');
}
