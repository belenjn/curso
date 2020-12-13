// let numeros = [1, 6, 8 , 4, 2, 7, 10, 3, 5];
// utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el núm mayor?




let numeros = [1, 6, 8 , 4, 2, 7, 10, 3, 5];
let numeroGrande = 0;


for ( let i = 0; i <= numeros.length; i++){

    if( numeros[i] > numeroGrande){
        numeroGrande = numeros[i];
    }




}


console.log('El número mayor es: ' + numeroGrande);

