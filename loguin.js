
const senha = document.getElementById("senha");

const mostrarSenha = document.getElementById("mostrar-senha");

const formulario = document.getElementById("form-login");

const mensagem = document.getElementById("mensagem");

const recuperar = document.getElementById("recuperar");


mostrarSenha.addEventListener("click", function() {

    if (senha.type === "password") {

        senha.type = "text";

        mostrarSenha.textContent = "Ocultar";

    } else {

        senha.type = "password";

        mostrarSenha.textContent = "Mostrar";

    }

});


formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const email = document.getElementById("email").value;

    const senhaDigitada = senha.value;

    mensagem.textContent = "";

    if (!email || !senhaDigitada) {

        mensagem.textContent = "Preencha todos os campos!";

        return;

    }

    if (senhaDigitada.length < 6) {

        mensagem.textContent =
            "A senha precisa ter pelo menos 6 caracteres.";

        return;

    }

    mensagem.style.color = "#39d6c2";

    mensagem.textContent =
        "Dados validados! Conecte o sistema ao servidor para entrar.";

});


recuperar.addEventListener("click", function(evento) {

    evento.preventDefault();

    mensagem.style.color = "#39d6c2";

    mensagem.textContent =
        "Entre em contato com o suporte para recuperar sua senha.";

});