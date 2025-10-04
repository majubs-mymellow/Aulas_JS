/*Como cirar variáveis em JavaScript
 -> variável é um espaço na memória
 -> toda variável precisa de: nome e tipo
 -> sintaxe: let <nome-variavel>
 */

/*let idade /*Variável idade criada, mas nenhum valor ou tipo foi passado pra variável*/
/*let numero = 15 /*Variável chamada numero com o valor 15 associado -> tipo inteiro (ou int, interger)*/
/*let preco = 9.99 /*Variável do tipo double (decimal) chamada preco com o valor 9.99*/
/*let nome = "JavaScript" /*Variável do tipo String (texto) chamada nome com o valor "JavaScript"*/

/*Escrevendo textos no console*/

/*console.log("Hello world! :)");*/



/*Escreva no console seu nome, idade e localização utilizando variáveis*/

/*let age = 17;
let name = "Maju"
let localizacao = "São Bernardo do Campo"

console.log("Idade: " + age )
console.log("Nome: " + name)
console.log("Localização: " + localizacao)



/*If-Else:
    -> Estrutura Condicional: tomar decisões
    */

/*let idade = 9

if (idade >= 18) 
{
    console.log("É maior de idade!")
    
} else 
{

    console.log("É menor de idade.")

}

/*Exercício: desenvolva um código que compare uma nota armazenada na variável chamada "nota", se for maior ou igual a 5, o aluno está aprovado, se for menor que 5, está reprovado*/

/*modo perfumaria ativado 
-> permitir que a entrada do usuário seja capturada*/

/*Importando um modo que permite ler a entrada do usuário */


const readline = require("readline")

/*Configuração para ler os dados do teclado*/
const rl = readline.createInterface ({
   input: process.stdin,
   output: process.stdout
})

/*Perguntando a nota */
rl.question("Digite a nota do aluno: ", function(nota){
    /*convertendo entrada para número*/
    nota = Number(nota);

    if (nota >= 5) {
        console.log("Aprovado!")
        console.log("")
        
    } else {
        
        console.log("Reprovado!")
        console.log("")
    }
rl.close();
})




