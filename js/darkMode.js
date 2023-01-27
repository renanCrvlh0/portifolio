export function darkMode() {
  const habilidade = document.querySelector('.ativar');
  const fechar = document.querySelector('.fechar');
  const corpo = document.querySelector('body');
  const cabecalho = document.querySelector('header');
  const logo = document.querySelector('.logo');
  const navegacao = document.querySelectorAll('.navegacao');
  const redesLaterais = document.querySelectorAll('.redes-laterais');
  const subtitulos = document.querySelectorAll('.subtitulos');
  const subtituloSobre = document.querySelector('.subtitulo-sobre');
  const textoSobre = document.querySelector('.texto-sobre');
  const btn2 = document.querySelector('.btn2');
  const perfil = document.querySelector('.perfil');
  const perfilGit = document.querySelector('.perfil-git');
  const caixaHabilidade = document.querySelectorAll('.caixa-habilidade');
  const formacoes = document.querySelector('.formacoes');
  const textoFormacao = document.querySelectorAll('.texto-formacao');
  const card = document.querySelectorAll('.card');
  const deployCodigo = document.querySelectorAll('.deploy-codigo');
  const contatos = document.querySelector('.contatos');
  const contatar = document.querySelector('.contatar');
  const caixaContatos = document.querySelectorAll('.caixa-contatos');
  const rodape = document.querySelector('footer');

  const btnDarkLight = document.querySelector('#darkMode');
  const iconMode = document.querySelector('.light-mode');

  habilidade.classList.toggle('dark-habilidade');
  fechar.classList.toggle('dark-fechar');

  btnDarkLight.classList.toggle('btn-darkMode');

  if (iconMode.textContent == 'dark_mode') {
    iconMode.textContent = 'light_mode';
  } else if (iconMode.textContent == 'light_mode') {
    iconMode.textContent = 'dark_mode';
  }

  corpo.classList.toggle('dark-body');
  cabecalho.classList.toggle('dark-header');
  logo.classList.toggle('dark-logo');

  navegacao.forEach((nav) => {
    nav.classList.toggle('dark-navegacao');
  });

  redesLaterais.forEach((redes) => {
    redes.classList.toggle('dark-redesLaterais');
  });

  subtitulos.forEach((sub) => {
    sub.classList.toggle('dark-subtitulos');
  });

  subtituloSobre.classList.toggle('dark-subtituloSobre');
  textoSobre.classList.toggle('dark-textoSobre');
  btn2.classList.toggle('dark-btn2');
  perfil.classList.toggle('dark-perfil');
  perfilGit.classList.toggle('dark-perfilGit');

  caixaHabilidade.forEach((habilidade) => {
    habilidade.classList.toggle('dark-caixaHabilidade');
  });

  formacoes.classList.toggle('dark-formacoes');

  textoFormacao.forEach((formacao) => {
    formacao.classList.toggle('dark-textoFormacao');
  });

  card.forEach((cardProjetos) => {
    cardProjetos.classList.toggle('dark-card');
  });

  deployCodigo.forEach((deploy) => {
    deploy.classList.toggle('dark-deployCodigo');
  });

  contatos.classList.toggle('dark-contatos');
  contatar.classList.toggle('dark-contatar');

  caixaContatos.forEach((contatos) => {
    contatos.classList.toggle('dark-caixaContatos');
  });

  rodape.classList.toggle('dark-footer');
}
