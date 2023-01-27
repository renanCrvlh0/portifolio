export function ativar() {
  const ativar = document.querySelector('.ativar');
  const containerPrincipal = document.querySelector('.container-principal');

  ativar.classList.add('habilidade');
  containerPrincipal.classList.add('ativar-opacidade');
}

export function desativar() {
  const ativar = document.querySelector('.habilidade');
  const containerPrincipal = document.querySelector('.container-principal');

  ativar.classList.remove('habilidade');
  containerPrincipal.classList.remove('ativar-opacidade');
}
