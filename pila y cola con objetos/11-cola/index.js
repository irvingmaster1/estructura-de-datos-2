class Cola {
    constructor(){
        this.almacenCola=[];        
        this.inicio=0;
        this.fin=0;            
    }
    enqueue(elemento){
        this.almacenCola[this.fin]=elemento;   
        this.fin++;                            
        return this.almacenCola;                    
    }
    dequeue(){
        if(this.inicio===this.fin){
            return null;
        }
        const elemento=this.almacenCola[this.inicio];
        delete this.almacenCola[this.inicio];
        this.inicio++;
        return elemento;
    }
    peek(){ 
        if(this.size()===0){
            return null;
        }
        return this.almacenCola[this.inicio];
    }
    size(){
        return this.fin-this.inicio;
    }
    print(){
        return this.almacenCola;
    }
    isEmpty(){ 
        if(this.inicio===this.fin){
            return true;
        }
        return false;
        
    }
}

const COLA = new Cola();