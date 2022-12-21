window.onload = () => {
    const btnFront = document.querySelector('.btn-front');
    const btnBack = document.querySelector('.btn-back');
    const btnBanco = document.querySelector('.btn-banco');
    const btnFrame = document.querySelector('.btn-frame');
    const btnDesign = document.querySelector('.btn-design');
    const btnSoft = document.querySelector('.btn-soft');

   


    function dropdown(classe){
        if (classe.classList.contains('ativo')){
            classe.classList.add('ativo');
        } else {
            classe.classList.remove('ativo');
        }
            
    }
    const front = document.querySelector('.teste-front');
    const back = document.querySelector('.teste-back');
    const banco = document.querySelector('.teste-banco');
    const frame = document.querySelector('.teste-frame');
    const design = document.querySelector('.teste-design');
    const soft = document.querySelector('.teste-soft');

    btnFront.addEventListener('click', dropdown(front))
}