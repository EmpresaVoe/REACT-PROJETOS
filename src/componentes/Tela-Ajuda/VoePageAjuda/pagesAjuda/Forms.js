

const btn = document.querySelector('#send');

btn.addEventListener("click", function(e) {
    e.preventDefault(); 

    const Nome = document.querySelector("#Nome");
    const Sobrenome = document.querySelector("#Sobrenome");
    const Email = document.querySelector("#Email");
    const Título = document.querySelector("#Título");
    const Mensagem = document.querySelector("#Mensagem");


    const value = (Nome, Sobrenome, Email, Título, Mensagem).value;

    console.log(value);
})

