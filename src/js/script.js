//DECLARAÇÕES E VARIAVEIS

var nome ="fiap";
console.log(nome);

let idade = 18;
console.log(idade)

const sobrenome="Fiapinho";
console.log(sobrenome)

//declarando um variavel indefinida
let nome1;
console.log(nome1)

//declarando uma variavel nula
let nome2=null;
console.log(nome2)

//TIPOS DE VARIAVEIS

let exemplo1 =10;
console.log(typeof exemplo1)

let exemplo2 ="Tecnologia";
console.log(typeof exemplo2)

let exemplo3 =true;
console.log(typeof exemplo3)

let exemplo4={};
console.log(typeof exemplo4)

let exemplo5 =[];
console.log(typeof exemplo5)

//CONVERSÕES

let numFloat =123.456;
console.log(parseInt(numFloat));

let numString ="123.456";
console.log(parseFloat(numString));

//METODOS

//lenght = verifica o tamanho da string
let frase ="O mundo da tecnologia";
console.log(frase.length);

//indexOf -retorna um trecho do texto

let texto="A programação indomável e sustentável";
console.log(texto.indexOf("ão"))

//slice - retorna um trecho do texto com inicio e fim

let info ="Processamento de ponta";
console.log(info.slice(16,25))

//OPERADORES ARITIMÉTICOS

const num1=10;
const num2=20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//OPERADORES LÓGICOS

const num3=10;
const num4=20;

console.log(num3 < num4);
console.log(num3 > num4 && num4 < num3);
console.log(num3 > num4 || num4 < num3);

//OPERADORES DE COMPARAÇÃO

console.log(num3 == num4);
console.log(num3 === num4);

//ESTRUTURA CONDICIONAL

if(true){
    console.log("é verdadeiro")
}

//if/else
let (usuario="Teste"){
    console.log("Usuario Correto")
}

//if encadeado / aninhado

let idade =15

if(idade < 15){
    console.log("Menor de idade")
}else if(idade >15 && idade <18){
    console.log("não é maior mas pode entrar")
}else{
    console.log("Pode entrar é maior")
}

//switch

let time = "São Paulo"

switch (time){
    case "São Paulo":
        console.log("Melhor time")
        break;
        case "Corinthans":
            console.log("Não é o melhor time")
            break;
            case "Palmeiras":
            console.log("Não tem mundial")
            break;
            default:
                console.log("nenhuma das opções")
}

// ternario 

let valor = 100;

let resultado = valor == 100 ? "Certo" :"Errado"
console.log(resultado)

//ternario encadeado
let produto ="notebok"
const preco= produto ="notebook" ? desconto ? 100 :200 : produto
console.log(preco)

//ESTRUTURA DE REPETIÇÃO

//FOR

for(let i=0; i<=10;i++){
    console.log("O valor de I é :" ,i)

}