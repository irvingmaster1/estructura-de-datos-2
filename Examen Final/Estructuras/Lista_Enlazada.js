//clase para crear los nodos
class Nodo{
    constructor(dato, next = null){
        this.dato = dato;
        this.next = next;
    }
}


//clase para crear la lista
class ListaEnlazada{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //METODOS DE LA LISTA ENLAZADA SIMPLE...............................................................

    //insertBefore  agrega un nodo al principio de la lista *
    insertBefore(dato){
        this.head = new Nodo(dato, this.head);
        this.size++;
    }

     //insertAfter  agrega un nodo al Final de la lista *
    insertAfter(dato){
        let newNode = new Nodo(dato);
        
        if(! this.head){
            this.head = newNode;
        }
        else{
            let tail = this.head;
            while(tail.next !==null){
                tail = tail.next;
            }
            tail.next = newNode;
        }
        this.size++;
    }
    //insertAt      agrega un nodo en una posicion especifica
    insertAt(dato, index){
        if(index < 0 || index > this.size){
            return null;
        }

        const newNode = new Nodo(dato);
        let current = this.head;
        let previous;

        if(index == 0){
            newNode.next = current;
            this.head = newNode;
        }else{
            for(let i=0; i<index; i++){
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }
    //removeFirst   remueve el primer nodo.*
    removeFirst(){
        if(this.head != null){
        this.head = this.head.next;
        this.size--;
        }
        else{
            return null;
        }
    }
    //removeLast    remueve el ultimo nodo.*
    removeLast(){
        if (!this.head) {
            return;
          }
         
          if (!this.head.next) {
           this.head = null;
          }
         
          let previous = this.head;
          let node = this.head.next;
         
          while (node.next) {
            previous = node;
            node = node.next;
          }
          previous.next = null;
          this.size--;
         }

    //removeData    remueve un node con el valor que le pasamos
    removeData(dato){
        let current = this.head;
        let previous = null;

        while(current != null){
            if(current.dato === dato){
                if(!previous){
                    this.head = current.next;
                }
                else{
                    previous.next= current.next;
                }
                this.size--;
                return current.dato;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }
    //removeFrom    remueve un nodo de una posocoon en especifica
    removeFrom(index){
        if(index<0 || index>this.size){
            return null;
        }

        let current = this.head;
        let previous = null;

        if(index == 0){
            this.head = current.next;
            current.next = null
        }
        else{
            for(let i=0; i<index; i++){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }
    //removeList    remueve toda la lista*
    removeList(){
        this.head = null;
        this.size = 0;
    }
    //isEmpty       retorna un true si la lista esta vacia y un flase si la lista no esta vacia*
    isEmpty(){
        if(this.size === 0){
            return alert("la lista está vacia");
        }
        else{
            return alert("la lista No está vacia");
        }
    }
    //size          retorna el tamaño de la lista*
    getSize(){
        return alert("el tamaño de la lista es: "+this.size);
    }
    //print         muestra los nodos de la lista*
    print(){
        let Lebdy = document.querySelector('#Lebdy')
        let current = this.head;
        Lebdy.innerHTML=``
        for( let i = 0 ; i<this.size ;i++) {
            Lebdy.innerHTML +=`
            <tr>
            <td>${current.dato}</td>
            </tr>
            `
            current = current.next;
        }
    }

}
export {ListaEnlazada}