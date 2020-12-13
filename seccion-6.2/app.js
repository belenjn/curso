
class Coche {

    constructor(marca, tipo1, puertas){

        this.marca= marca; 
        this.tipo= tipo1;
        this.puertas= puertas;

        this.creadoEn = 'hoy';
        this.encendido = false;
        this.gasolina= 100;

    }

    encenderCoche() {

        if(this.encendido){
            console.error('El coche ya estaba encendido... se dañó el motor');
        }else {
            this.encendido = true;
            console.log('El coche está encendido');
        }

        return this;
    }

    realizarViaje(consumo) {

        if (!this.encendido) return console.log('coche apagado');

        if (consumo > this.gasolina) return console.log('No puede realizar el viaje: gasolina ' + this.gasolina);

       

            
            this.gasolina = this.gasolina - consumo;
                return 'Le queda ' + this.gasolina
            


          
     

    }

}

let coche = new Coche( 'Mazda', 'Sedan', 2);


console.log(coche);



