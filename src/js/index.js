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

/*
let valorItem = document.querySelectorAll(".item");
    
    let valorInput = document.getElementsByClassName("campo");

    valorItem.forEach(item => {
        

        console.log(valorInput)

        if (valorInput.value === ""){
            valorInput.classList.add('campo-vazio');
            valorInput.classList.remove('campo-preenchido');

           item.innerHTML += `<p class ="campo-obrigatorio">campo obrigatório</p>`;
        } else {
            valorInput.classList.add('campo-preenchido');
            valorInput.classList.remove('campo-vazio');
        };
    });
*/