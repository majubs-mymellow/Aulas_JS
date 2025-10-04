/*Trabalhando com métodos de console

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual é seu nome? ', (nome) => {
    console.log(`Olá, ${nome}`)
    rl.close();
})
*/




/*Usando o let -> respeita o escopo do bloco
if(true){
    let nome = "Majubs"
    console.log(nome);
}
*/



/*Usando o var -> não respeita o escopo do bloco
if(true){
    var nome ="Majubs"
    console.log(nome);
} 
console.log(nome)
*/


/*exemplo 3 -> dentro de um for (também respeita o escopo)
for(let i = 0; i < 3; i++){
    console.log("Dentro do for: ", i)
}*/




/*IF ELSE
let idade = 10

if (idade < 12) {
    console.log("Criança")

} else if (idade < 18) {
    console.log("Adolescente")
    
} else {
    console.log("Adulto")

}*/




/*const readline = require("readline")

const rl = readline.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    })

rl.question("Digite a Nota Um: ", function (notaUm) {
    rl.question("Digite a Nota Dois: ", function (notaDois) {
        rl.question("Digite a Nota Três: ", function (notaTres) {
            rl.question("Digite a Nota Quatro: ", function (notaQuatro) {
                rl.question("Digite a Carga Horária(em horas): ", function (cargaHoras) {

                    rl.question("Digite a quantidade de faltas: ", function (faltas) {

                        notaUm = Number(notaUm)
                        notaDois = Number(notaDois)
                        notaTres = Number(notaTres)
                        notaQuatro = Number(notaQuatro)
                        cargaHoras = Number(cargaHoras)
                        faltas = Number(faltas)

                        /*Calculo da média 
                        let calculoNota = (notaUm + notaDois + notaTres + notaQuatro) / 4
                       
                        /*Calculo da porcentagem de faltas
                        let porcentagemFalta = ( faltas/ cargaHoras)*100


                        //verificação da situação do aluno (nota e falta)
                        if (porcentagemFalta >= 25){
                            console.log("Reprovado por falta")
                        } else if (calculoNota >= 6) {
                            console.log("APROVADO")
                        } else {
                            console.log("REPROVADO")
                        }

                        rl.close();

                    })
                })
            })
        })
    })
})*/


/*Definindo as informações do sistema

let id = "admin"
let senha = "admin123"

/*Definindo as credenciais definidas pelo usuário 

let idUsuario = "admin"
let senhaUsuario = "admin123"

/*Verificação do login

if (id == idUsuario && senha ==senhaUsuario){
    console.log("Usuário logado com sucesso.")
} else{
    console.log("Usuário ou senha incorretos.")
}*/


/*let codigo = 105;

switch (codigo) {
    case 980:
        console.log("Kindle")
        break;
    case 332:
        console.log("Nintendo Switch Oled do Zelda")
        break; 
    case 105:
        console.log("Enigma do Medo")
        break;
    default:
        console.log("Item não encontrado :( (escolha o nintendo)")
        break;
}*/



/*const readline = require("readline")

const rl = readline.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    })

rl.question("Digite um Número ", function (numeroUm) {
    rl.question("Digite outro Número ", function (numeroDois) {
        console.log("1. Adição")
        console.log("2. Subtração")
        console.log("3. Multiplicação")
        console.log("4. Divisão")
    

        rl.question("Escolha a operação: ", function (operacao) {


            numeroUm = Number(numeroUm)
            numeroDois = Number(numeroDois)
            operacao = Number(operacao)

            switch (operacao) {
                case 1:
                    let resultadoSoma = numeroUm + numeroDois
                    console.log("Resultado da Adição: " + resultadoSoma)
                    break;
                case 2:
                    let resultadoSub = numeroUm - numeroDois
                    console.log("Resultado da Subtração: " + resultadoSub)
                    break;
                case 3:
                    let resultadoMul = numeroUm * numeroDois
                    console.log("Resultado da Multiplicação: " + resultadoMul)
                    break;
                case 4:
                    let resultadoDiv = numeroUm / numeroDois
                    console.log("Resultado da Divisão: " + resultadoDiv)
                    break;

                default:
                    console.log("Opção Inválida.")
                    break;


            }
            rl.close();
        })
    })
})*/


/*for (let i =0; i <=10; i++){
    console.log("Contador: ", i)
}*/




/*console.log(" ")
console.log(" ")

for (let i = 0; i <= 20; i++){
    if( i % 2 ==0)
    console.log("Contando: " + i)
}
console.log(" ")
console.log(" ")

for (let i = 0; i <= 20; i++){
    if( i % 2 !=0)
    console.log("Contando: " + i)
}

console.log(" ")
console.log(" ")


const readline = require("readline")

const rl = readline.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    })

rl.question("Digite um Número: ", function(numeroUm) 
{
    i = Number(numeroUm)


    for (let i = numeroUm; i >=0; i--){
    console.log("Contagem Regressiva: ", i)
     }
     rl.close();
})*/



const readline = require("readline")

const rl = readline.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    })



    while (numero << 10) {
        rl.question("Digite um Número: ", function (numero) {
            numero = Number(numero)
        
        })
        if (numero <= 10) {
            console.log("Número menor que 10. Tente novamente.");
        }else{
        console.log("Número inserido é 10 ou maior. Programa encerrado.")
    }
     rl.close();
}






//cria uma função chamada delay que conta o tempo em milisegundos
/*function delay(ms){
    //cria uma rotina que fica "resolvendo" algo, nesse caso,
    //fica esperando milisegundos definidos pelo usuário e
    // exibe o conteúdo no console
    return new Promise(resolve => setTimeout(resolve,ms));
}

let i = i

while (i <=5){
    console.log(i);// escrever o número na tela
    i++ //incrementar o número
    await delay(1000)
}*/