class Nodo {
    constructor(dato, next, back) {
      this.dato = dato;
      this.next = next;
      this.back = back;
    }
  }
  
  class DoubleLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    //insertFirst
    insertFirst(dato) {
      const newNode = new Nodo(dato, this.head, null);
  
      if (this.head) {
        newNode.next = this.head;
        this.head.back = newNode;
        this.head = newNode;
      } else {
        this.head = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
    //insertLast
    insertLast(dato) {
      const newNode = new Nodo(dato, null, this.tail);
  
      if (this.tail) {
        newNode.back = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        this.tail = newNode;
        this.head = newNode;
      }
      this.size++;
    }
  
    //insertAt
    insertAt(dato, index) {
      if (index < 1 || index > this.size+1) {
        return null;
      }
  
      const newNode = new Nodo(dato, null, null);

  
      if (index == 1) {
        this.insertFirst(dato)
      } 
      if(index == this.size + 1){
        this.insertLast(dato)
      }
      else {
        let current = this.head
        let previous;
        for (let i = 1; i < index; i++) {
          previous = current;
          current = current.next;
        }
        newNode.next = current;
        newNode.back = previous;
        current.back = newNode;
        previous.next = newNode;
      this.size++;
      }
    }
    //removeFirst
    removeFirst() {
      if (!this.head) {
        return null;
      }
  
      const valueToReturn = this.head.dato;
  
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.back = null;
      }
      this.size--;
      return valueToReturn;
    }
    //removeLast
    removeLast() {
      if (!this.tail) {
        return null;
      }
  
      const valueToReturn = this.tail.dato;
  
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.back;
        this.tail.next = null;
      }
      this.size--;
      return valueToReturn;
    }
    //removeData
    removeData(dato) {
      let current = this.head;
      let previous = null;
  
      while (current !== null) {
        if (current.dato === dato) {
          if (!previous) {
            this.removeFirst();
          } else if (!current.next) {
            this.removeLast();
          } else {
            previous.next = current.next;
            current.next.back = previous;
          };
          this.size--;
          return current.dato;
        };
        previous = current;
        current = current.next;
      };
      return null;
    }
    //removeFrom
  
    removeFrom(indice){
      if(indice < 1 || indice > this.size){
          
        return null;
      }
      else if(indice == 1){
          return this.removeFirst()
      }
      else if(indice>1 && indice<this.size){
              
          let current = this.head
          let previous
          let nxt
  
          for(let i = 1; i < indice; i++){
              current = current.next
          }
  
          previous = current.back
          nxt = current.next
  
          previous.next = nxt
          nxt.back = previous
  
          this.size--
          return current.dato
      }
      else if(indice == this.size){
          this.removeLast()
      }
  }
    //print
    print() {
      let current = this.head;
      let result = "";
      let ldebdy= document.querySelector('#ldebdy')
      ldebdy.innerHTML=``
      for( let i = 0 ; i<this.size ;i++) {
          ldebdy.innerHTML +=`
          <tr>
          <td>${current.dato}</td>
          </tr>
          `
          current = current.next;
      }
    }
    //reversePrint por arreglar
    reversePrint() {
      let current = this.tail;
      let result = "";
      while (current) {
        result += current.dato+"," ;
        current = current.back;
      }
  
      return alert(("la lista empezando por el final es: "+result ))
    }
    //getSize
    getSize() {
      return alert("el tamaño es :"+this.size)
    }
  
    //isEmpty
    isEmpty() {
      if(this.size===0){
          alert("la lista está vacia")
      }
      else{
        alert("la lista no está vacia")
      }
    }
  }
  export {DoubleLinkedList}