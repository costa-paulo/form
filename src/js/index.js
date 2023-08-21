function validarForm(){
    let valorInput = document.querySelectorAll(".campo");
    let campoObrigatorio = document.querySelectorAll(".campo-obrigatorio")
    let elementoAtual = 0
    
    valorInput.forEach(input => {

        if (input.value === ""){
            input.classList.add('campo-vazio');
            input.classList.remove('campo-preenchido');

           campoObrigatorio[elementoAtual].innerHTML = `<p>campo obrigatório</p>`;
        } else {
            input.classList.add('campo-preenchido');
            input.classList.remove('campo-vazio');
            campoObrigatorio[elementoAtual].innerHTML = "";
        };

        elementoAtual++;
    });
};