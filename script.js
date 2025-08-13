//Declaracao de variaveis
//const, let e var
//------------------------
// var linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo "+ linguagem)
// var idade = 18
// console.log("Oi, " + nome)
// if(idade >= 18){
//     let nome = "Fernando"
//     console.log("Sim," + nome + " Voce pode dirigir")
// }
// console.log(`Ate mais, ${nome}`) // com Crase, fica mais bonito em vez de concatenar e ai se usa ${nome da variavel}
//---------------------
//Sistemas de tipos
//-- Primitiva
// boolean
// null
// nuumber
// string
// undefined
//-- Objetos
// JSON
// Array
// classe wrapper (String,Number,Boolean)
// Date
// Math
// Funcoes
//----------------------
// let idade = 20
// console.log(typeof(idade))
// const nome = "Ana"
// console.log(typeof(nome))
// idade = "vinte"
// console.log(typeof(idade))
//---------------------------
//Coerção
// const n1 = 2
// const n2 = "3"
// // Coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// // Coerção Explícita
// const n4 = n1 + Number(n2)
// console.log(n4)
//operadores == e === usar sempre o ===
// console.log(1 == 1)
// console.log(1 == "1")
// console.log(1 === 1)
// console.log(1 === "1")
// console.log(true === 1)
// console.log (true == "1")
// console.log(true == "true")
// console.log(1 == [1])


// function soma (a,b){
// return a + b}
// const res = soma (2, 3)
// console.log(res)
// const triplo = function (n=5){
// return 3 * n}
// console.log(triplo())
// const hello = () => {} (tem somente uma linha entao as chaves podem ser omitidas)
    //console.log('hello')
//hello()
// const dobro = (n) => 2 * n (como possui apenas uma linha que produz um valor a ser devolvido nao se usa o return)
// console.log(dobro(5))
// const apenascomA = nomes.filter(nome => nome.startsWith('A'))
// console.log(apenascomA)
// const res = nomes.map(function(nome){return nome[0]})
// console.log(res)
//const numeros = [1,2,3] // quer q seja [1,4,9]
//console.log(numeros.map(n => n * n))
//const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
//const todosComecamComA = nomes.every(n => n.startsWith('A'))
//console.log(todosComecamComA)
//const peloMenosUmComecacomA = nomes.some(n => n.startsWith ('A'))
//console.log(peloMenosUmComecacomA)
//const valores = [1, 2, 3, 4]
//const soma = valores.reduce((ac, v) => ac + v)
//console.log(soma)


//closures
//let umaFuncao = function(){
    //console.log('Fui armazenada em uma variavel')
//}
//umaFuncao()
//function f(funcao){
    //funcao()
//}
//f(umaFuncao)


//function g(){
    //function outraFuncao(){
        //console.log('Fui criada por g')
    //}
    //return outraFuncao
//}

//f(g) chama a funcao g na funcao f
//g ()() voce consegue chamar a (outraFuncao) assim como na debaixo
// const gResult = g()
    // gResult()
//function f(){
    //let nome = 'Joao'
    //function g(){
        //console.log(nome)
    //}
    //g()
//}
//f() a funcao g pode usar o nome que esta na funcao f

//function ola(){
    //let nome = 'joao'
    //return function(){
        //console.log(`Ola, ${nome}`)
   // }
//}
//let olaResult = ola()
//olaResult()
// function saudacoesFactory(saudacao, nome){
    //let a
    //return function(){
        //console.log(`${saudacao} ${nome}`)
    //}
//}