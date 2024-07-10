
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log (numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    // EL USUARIO NO ACERTO
    else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es Menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es Mayor'); 
    }       
    intentos++;
    limpiarCaja();

}
    return;
}

function limpiarCaja(){
     document.querySelector ('#valorUsuario').value = "";
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);

    // si ya sorteammos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p','Ya se sortearon todos los numeros posibles');
    }
    else{
    // si el numero generado esta incluido en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Numero Secreto !');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    // generar el numero aleatorio
    // inicializar  el numero de intentos
    condicionesIniciales();
    //dasabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();

asignarTextoElemento('h1','Juego del Numero Secreto !');
asignarTextoElemento('p', 'Indica un numero del 1 al 10');





























/*



let listaGenerica = [];
let lenguajesDeProgramacion = ['Javascrip','C','C++','Kotlin','Python'];
let listaNumeros = ['9','5','2','8'];

lenguajesDeProgramacion.push ('Java', 'Ruby', 'GoLang');
console.log (lenguajesDeProgramacion);

function reversaProgramas (){
     for(let i = lenguajesDeProgramacion.length - 1; i >=0; i-- ) {
      console.log (lenguajesDeProgramacion[i]);
}
}
reversaProgramas();

function promedioNumero (lista){

     let suma = 0;
        for (let i = 0; i < lista.length; i++) {
            suma += lista[i];
        }
        return suma / lista.length;
    }
    
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    console.log(promedioNumero(numeros)); // 5.5

    let listaNumeros2 = [8,24,1,9,10,39,28,10,5];

function mayorYMenor(numeros){
    let mayor = numeros[0];
    let menor = numeros[0];
    for(let i = 1; i < numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
        if(numeros[i] < menor){
            menor = numeros[i];
        }
    }
    return `Número mayor: ${mayor} y Número menor: ${menor}`;
}
console.log(mayorYMenor(listaNumeros2));


let listaNumeros3 = [5,4,6,40,11];
function sumaLista(numeros){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return `La Suma de los numero de la lista es: ${suma}`;
}
console.log(sumaLista(listaNumeros3));

let listaObjetos = ["Perro","Gato","Pez","Pajaro"];
function encuentraLista(elemento){
    let posicion = -1;
    for(let i = 0; i < listaObjetos.length; i++){
        if(listaObjetos[i] == elemento){
            posicion = i;
        }
    }
    return `El elemento "${elemento}" está en la posición ${posicion}`;
}
console.log(encuentraLista("Perro"));
console.log(encuentraLista("Gato"));


let listaUno = [1,2,3,4,5];
let listaDos = [10,9,8,7,6];
function sumaDosListas(lista1,lista2){
    let listaSuma = [];
    if(lista1.length != lista2.length){
        return "Las listas no son del mismo tamaño";
    }
    for(let i = 0; i < lista1.length; i++){
        listaSuma.push(lista1[i]+lista2[i]);
    }
    return listaSuma;
}
console.log(`Suma de 2 listas:`);
console.log(sumaDosListas(listaUno,listaDos));

let listaNumeros4 = [8,6,4,2];
function cuadradoLista(lista){
    let listaCuadrado = [];
    for(let i = 0; i < lista.length; i++){
        listaCuadrado.push(lista[i]**2);
    }
    return listaCuadrado;
}
console.log(`Cuadrado de una lista:`);
console.log(cuadradoLista(listaNumeros4));


function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Numero Secreto !');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    // generar el numero aleatorio
    // inicializar  el numero de intentos
    condicionesIniciales();
    //dasabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();

asignarTextoElemento('h1','Juego del Numero Secreto !');
asignarTextoElemento('p', 'Indica un numero del 1 al 10');








/*


let peso = 57;
let altura = 1.57;
let valorImc;
let realDolar = 4.80;
let Dolar = 7;
let cbioMoneda;

function resultadoImc() {
   valorImc = peso / (altura * altura);
   return;
}
resultadoImc();
console.log (`el valor del IMC es: ${valorImc}`);

function cambioReales() {
    cbioMoneda = Dolar * realDolar;
    return;
}

cambioReales();
console.log (`El cambio de: ${Dolar} a Reales son : ${cbioMoneda}`);


function tablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
//Ejemplo
const numeroTabla = 8;
tablaDeMultiplicar(numeroTabla);







function saludo() {
    console.log ("Hola mis parceros, saludos desde Colombia");
    return
};
saludo();

function nombreUsuario (nombre){
    nombre = (prompt (" Ingresa tu nombre :"));
    console.log (`¡Hola ! ${nombre} Bienvenido a mi pagina `);
    return;   
}
nombreUsuario();

function numeroDoble (numero1){
    numero1 = (prompt (" Digita un numero :"));
    resultado = (numero1)*2;
    console.log (`El doble del numero ingresado es ${resultado}`)
}
numeroDoble();

function promedio (val1,val2,val3){
    val1 = (prompt (" Digita numero 1 para promediar :"));
    val2 = (prompt (" Digita numero 2 para promediar :"));
    val3 = (prompt (" Digita numero 3 para promediar:")); 
    resulPromedio = (val1)+(val2)+(val3) / 3;
    console.log (`El promedio de ${val1} , ${val2} , ${val3} , es : ${resulPromedio}`);
    return;
}
promedio();

function numeroCuadrado(cuadrado) {
    cuadrado = (prompt (" Digita numero para calcular el cuadrado :"));
    resulCuadrado = cuadrado * cuadrado;
    console.log (`El cuadrado de ${cuadrado} es ${resulCuadrado}`);
}
 numeroCuadrado();
 */