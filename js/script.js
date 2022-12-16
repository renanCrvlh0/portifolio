window.onload = () => {

    const habilidades = document.querySelectorAll('.btn-habilidades');

    habilidades.forEach(function(btn){
        btn.addEventListener('click', dropdown);
    })








    // const btnFront = document.querySelector('.btn-front');

    

    function dropdown(){
        const front = document.querySelectorAll('.teste');

        front.forEach(function(number){
             if (number.classList.contains('ativo')){
                number.classList.remove('ativo');
             } else {
                number.classList.add('ativo');
             }
        })

        // if (front.classList.contains('ativo')){
        //     front.classList.remove('ativo');
        // } else {
        //     front.classList.add('ativo');
        // }
        
    }

    //  btnFront.addEventListener('click', dropdown);
}