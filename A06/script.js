//Função Principal de validação que vai ser chamada pelo evento oninput do HTML
function validarEmail() 
{


    //Passo 1: capturar os elementos do DOM (Tela)
    //cria uma variável chamada emailInput, acessa o documento .html e "pega" o 
    //elemento pelo id "email"
    const emailInput = document.getElementById('email')
    const mensagemErro = document.getElementById('mensagemErro')
    const btnEnviar = document.getElementById('btnEnviar')

    //Passo 2: Verificar o valor a ser validado
    const email = emailInput.value.trim() //.trim() remove espaços em brancos

    //Validação para verificar se o formato do email está correto (@email.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    let isValido = false;
    //todo endereço de email que for digitado, será inválido,
    //até que a validação acuse que ele é válido.


    //Passo 3: Aplicar as regras de validação
    if (email == "") {
        //Campo vazio: não é um erro, mas também não é válido para continuar
        mensagemErro.textContent = "Digite seu e-mail para continuar."
        //limpar as classes de sucesso/erro
        mensagemErro.className = "mensagem-status"
        isValido = false
    } else if (emailRegex.test(email)) {
        //email válido
        mensagemErro.textContent = "Email válido!"
        mensagemErro.className = 'mensagem-status sucesso'
        btnEnviar.disabled = false;
        isValido = true;
    } else {
        //email inválido
        mensagemErro.textContent = "Email inválido."
        mensagemErro.className = 'mensagem-status erro'
        btnEnviar.disabled = true;
        isValido = false;
    }

    //Passo 4: Fazer o envio do formulário e exibir um alerta de sucesso

    document.getElementById('cadastroForm').addEventListener('submit', function (event){
        event.preventDefault();


    //Se o botão Enviar estiver habilitado, significa que a validação passou
    if (!document.getElementById('btnEnviar').disabled) {
        alert('Cadastro enviado com sucesso: ' + document.getElementById('email').value)
        //é aqui que fariamos uma chama para uma API, por exemplo

    }
})
}

validarEmail()