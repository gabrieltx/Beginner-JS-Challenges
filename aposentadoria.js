//Calculadora Aposentadoria - Desafio Launchbase Rocketseat

const nome = "Silvana";
const sexo = "F";
const idade = 60;
const contribuicao = 43;

const calcF = sexo == "F" && idade >= 30 && idade + contribuicao >= 85;
const calcM = sexo == "M" && idade >= 35 && idade + contribuicao >= 95;

if (calcF || calcM) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}
