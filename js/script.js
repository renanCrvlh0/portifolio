window.onload = () => {
    const btnFront = document.querySelector('.btn-front');
    const btnBack = document.querySelector('.btn-back');
    const btnBanco = document.querySelector('.btn-banco');
    const btnFrame = document.querySelector('.btn-frame');
    const btnDesign = document.querySelector('.btn-design');
    const btnSoft = document.querySelector('.btn-soft');

    

    btnFront.addEventListener('click', ()=>{
        const front = document.querySelector('.teste-front');

        front.classList.toggle('ativo');
    })

    btnBack.addEventListener('click', ()=>{
        const back = document.querySelector('.teste-back');

        back.classList.toggle('ativo');
    })

    btnBanco.addEventListener('click', ()=>{
        const banco = document.querySelector('.teste-banco');

        banco.classList.toggle('ativo');
    })

    btnFrame.addEventListener('click', ()=>{
        const frame = document.querySelector('.teste-frame');

        frame.classList.toggle('ativo');
    })

    btnDesign.addEventListener('click', ()=>{
        const design = document.querySelector('.teste-design');

        design.classList.toggle('ativo');
    })

    btnSoft.addEventListener('click', ()=>{
        const soft = document.querySelector('.teste-soft');

        soft.classList.toggle('ativo');
    })

}