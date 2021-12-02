class Cola {
    constructor(){
        this.almacenCola=[];        
           
    }

    enqueue(elemento){      //agrega un nuevo elemento al final de la cola
        this.almacenCola.push(elemento)                        
        return this.almacenCola;                    
    }

    dequeue(){              //retorna el primer elemento de la cola y lo elimina
        
        this.almacenCola.shift()//.shift muestra el primer elemento de la cola y lo borra
        return
    }

    peek(){                 //retorna el primer elemento de la cola sin eliminarlo
        if(this.almacenCola.length===0){
            return alert("la cola está vacia");
        }
        return alert("El primer elemento de la lista es: "+this.almacenCola[0])
    }

    size(){                 //retorna el numero de elementos que contiene la cola
        return alert("El tamaño de elementos que tiene la cola es: "+this.almacenCola.length)
    }

    print(){                //retorna los elementos que contiene la cola
        let colabdy= document.querySelector('#cola')
        colabdy.innerHTML=''
        for(let i=0; i<this.almacenCola.length;i++){
            colabdy.innerHTML+=`
            <tr>
            <td>${this.almacenCola[i]}</td>
            </tr>
            `
        }
        return this.almacenCola;
    }

    isEmpty(){              //retorna true si la cola esta vacia y flase si no lo esta
        if(this.almacenCola.length===0){
            return alert("La lista está vacía ")
        }
        return alert("La lista no Está vacia ")
        
    }
}


export {Cola}