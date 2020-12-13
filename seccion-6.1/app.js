
let persona1 ={
    nombre: 'Dani',
    edad: 24
};


let persona2 ={
    nombre: 'Belen',
    edad: 21
};

let persona3 ={
    nombre: 'Candy',
    edad: 8
};


let personas = [persona1, persona2, persona3];



for ( let i = 0; i < personas.length; i ++) { 

    let persona = personas[i]
   console.log(`${persona.nombre} -- ${persona.edad}`); 
}




