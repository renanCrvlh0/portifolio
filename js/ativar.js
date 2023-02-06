export function ativarFront() {
  const frontEnd = document.querySelector('.front');
  const containerPrincipal = document.querySelector('.container-principal');

  frontEnd.classList.add('habilidade');
  containerPrincipal.classList.add('ativar-opacidade');
}

export function ativarBack() {
  const backEnd = document.querySelector('.back');
  const containerPrincipal = document.querySelector('.container-principal');

  backEnd.classList.add('habilidade');
  containerPrincipal.classList.add('ativar-opacidade');
}

export function ativarBanco() {
  const bancoDados = document.querySelector('.banco');
  const containerPrincipal = document.querySelector('.container-principal');

  bancoDados.classList.add('habilidade');
  containerPrincipal.classList.add('ativar-opacidade');
}

export function ativarUi() {
  const uiUx = document.querySelector('.design');
  const containerPrincipal = document.querySelector('.container-principal');

  uiUx.classList.add('habilidade');
  containerPrincipal.classList.add('ativar-opacidade');
}

export function ativarFrame() {
  const frameWork = document.querySelector('.frame');
  const containerPrincipal = document.querySelector('.container-principal');

  frameWork.classList.add('habilidade');
  containerPrincipal.classList.add('ativar-opacidade');
}

export function desativar() {
  const ativar = document.querySelector('.habilidade');
  const containerPrincipal = document.querySelector('.container-principal');

  ativar.classList.remove('habilidade');
  containerPrincipal.classList.remove('ativar-opacidade');
}
