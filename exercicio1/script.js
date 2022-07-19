let nome

let idade

console.log(typeof nome);
console.log(typeof idade);

// undefined foi impresso pois aprensenta uma falta
// de valor na variavel

nome=prompt("Qual o seu nome?");
idade=prompt("Qual a sua idade?");

console.log(typeof nome);
console.log(typeof idade);

// Tudo que sai do prompt vira String, logo
// meu typeof ira acusar que é uam string

console.log("Olá", nome, "você tem", idade, "anos.");
