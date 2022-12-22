window.onload = () => {
    const btnHabilidades = document.querySelectorAll('.btn-habilidades');
    const teste = document.querySelectorAll('.container-botoes .teste');
    const arrow = document.querySelectorAll('.btn-habilidades .arrow-symbol');

    if (btnHabilidades.length && teste.length) {
        teste[0].classList.add('ativo');

        function ativar(index) {
            teste.forEach((div) => {
                div.classList.remove('ativo');
            });
            teste[index].classList.add('ativo');
            
        }

        btnHabilidades.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                ativar(index);
            });
        });
    }

}