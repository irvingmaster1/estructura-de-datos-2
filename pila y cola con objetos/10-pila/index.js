
class PilaA{
    constructor(){
        this.almacenPila=[];
        this.contPila=0;
    }
    push(){};
    pop(){};
    peek(){};
    size(){};
    print(){};
}
const PILAA = new PilaA();
class Pila{
    constructor(){
        this.almacenPila={};
        this.contPila=0;
    }
    push(elemento){
        this.almacenPila[this.contPila]=elemento;
        this.contPila++;
        return this.almacenPila;
    }
    pop(){   
        if(this.contPila===0){
            return null;
        }
        this.contPila--;
        const elemento = this.almacenPila[this.contPila];
        delete this.almacenPila[this.contPila];
        return elemento;
    }
    peek(){   
        if(this.contPila===0){
            return null;
        }
        return this.almacenPila[this.contPila-1];
    }   
    size(){ 
        return this.contPila;
    }
    print(){ 
        return this.almacenPila;
    }
}
const PILA = new Pila();