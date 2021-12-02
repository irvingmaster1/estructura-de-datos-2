//import

import {Pila} from "../Estructuras/Pila.js";
import {Cola} from "../Estructuras/Cola.js";
import {ListaEnlazada} from "../Estructuras/Lista_Enlazada.js"
import {DoubleLinkedList} from "../Estructuras/ListaDoblementeEnlazada.js"
import {ListaEC} from "../Estructuras/Enlazada_Circular.js"
import {ListaCDE} from "../Estructuras/Doble_Enlazada_Circular.js"

//instancias
const pila = new Pila()
const cola = new Cola()
const listaenlazada = new ListaEnlazada()
const listadoble = new DoubleLinkedList()
const listaEC = new ListaEC()
const listaCDE = new ListaCDE() 

//tabla
let tpila = document.querySelector('#tpila')
let tcola = document.querySelector('#tcola')
let tlistenl = document.querySelector('#tlistenl')
let tlde = document.querySelector('#tlde')
let tec = document.querySelector('#tec')
let tdec = document.querySelector('#tdec')


//tablas
let tabla = document.querySelector('.tab')
let tabc = document.querySelector('.tabc')
let tabble = document.querySelector('.tabble')
let tablde = document.querySelector('.tablde')
let tabec = document.querySelector('.tabec')
let tabdec = document.querySelector('.tabdec')


// boton tabla pila
tpila.addEventListener("click", ()=>{
    tabla.style.display="block"
    tabc.style.display="none"
    tabble.style.display="none"
    tablde.style.display="none"
    tabec.style.display="none"
    tabdec.style.display="none"
})

// boton tabla cola
tcola.addEventListener("click", ()=>{
    tabla.style.display="none"
    tabc.style.display="block" 
    tabble.style.display="none"
    tablde.style.display="none"
    tabec.style.display="none"
    tabdec.style.display="none"
    
})

//boton tabla lista enlazada
tlistenl.addEventListener("click", ()=>{
    tabla.style.display="none"
    tabc.style.display="none" 
    tabble.style.display="block"
    tablde.style.display="none"
    tabec.style.display="none"
    tabdec.style.display="none"
    
})

tlde.addEventListener("click", ()=>{
    tabla.style.display="none"
    tabc.style.display="none" 
    tabble.style.display="none"
    tablde.style.display="block"
    tabec.style.display="none"
    tabdec.style.display="none"
    
})
tec.addEventListener("click", ()=>{
    tabla.style.display="none"
    tabc.style.display="none" 
    tabble.style.display="none"
    tablde.style.display="none"
    tabec.style.display="block"
    tabdec.style.display="none"
    
})
tdec.addEventListener("click", ()=>{
    tabla.style.display="none"
    tabc.style.display="none" 
    tabble.style.display="none"
    tablde.style.display="none"
    tabec.style.display="none"
    tabdec.style.display="block"
    
})

//              pila
let datop = document.querySelector('#datop')
let selectp = document.querySelector('#pila1')
let insertp = document.querySelector('#insertp')


insertp.addEventListener("click", () => {
switch(selectp.value){
        case "push":
            pila.push(datop.value)
            console.log(pila.print())
            pila.print()
            
            break;
        case "pop":
            pila.pop()
            pila.print()
            console.log(pila.pop())
            
            break;
        case "peek":
            pila.peek()

       
            break;
        case "size":
            pila.size()
            // console.log(pila.size())
            break;
        default:
            break;
}   
})



//          cola
let datoc = document.querySelector('#datoc')
let selectc = document.querySelector('#cola1')
let insertc = document.querySelector('#insertc')

insertc.addEventListener("click", () => {
    switch(selectc.value){
            case "enqueue":
                cola.enqueue(datoc.value)
                console.log(cola.print())
                cola.print()
                break;
            case "dequeue":
                cola.dequeue()
                console.log(cola.dequeue())
                cola.print()
                break;
            case "peek":
                cola.peek()
                break;
            case "size":
                cola.size()
               
                break;
                case "isEmpty":
                cola.isEmpty()
               
                break;
            default:
                break;
    }   
    })

//              Lista enlazada
//datos usuario en lista enlazada
let datole = document.querySelector('#datole')
//dato de indice lista enlazada
let indexle = document.querySelector('#indexle')
//la opcion que elige el usuario en lista enlazada
let selectle = document.querySelector('#listaenlazada1')
//al darle al boton de insertar del formulario de lista enlazada
let insertle = document.querySelector('#insertle')

    insertle.addEventListener("click", () => {
        switch(selectle.value){
            case "insertBefore":
                listaenlazada.insertBefore(datole.value)
                console.log(listaenlazada.print())
                listaenlazada.print()
                break;
            case "insertAfter":
                listaenlazada.insertAfter(datole.value)
                console.log(listaenlazada.print())
                break;
            case "insertAt":
                listaenlazada.insertAt(datole.value, indexle.value)
                console.log(listaenlazada.print())
                break;
            case "removeFirst":
                listaenlazada.removeFirst()
                console.log(listaenlazada.print())
                break;
            case "removeLast":
                listaenlazada.removeLast()
                console.log(listaenlazada.print())
                break;
            case "removeData":
                listaenlazada.removeData(datole.value)
                console.log(listaenlazada.print())
                break;
            case "removeFrom":
                listaenlazada.removeFrom(indexle.value)
                console.log(listaenlazada.print())
                break;
            case "removeList":
                listaenlazada.removeList()
                console.log(listaenlazada.print())
                break;
            case "isEmpty":
                listaenlazada.isEmpty()
                break;
            case "getSize":
                listaenlazada.getSize()
    }
    })
//                  Lista doblemente Enlazada
//
let datolde = document.querySelector('#datolde')
let indexlde = document.querySelector('#indexlde')
let selectlde = document.querySelector('#selectlde')
let insertlde = document.querySelector('#insertlde')

insertlde.addEventListener('click',() => {
    switch(selectlde.value){
        case "insertFirst":
            listadoble.insertFirst(datolde.value)
            console.log(listadoble.print())
            listadoble.print()
            break;
        case "insertLast":
            listadoble.insertLast(datolde.value)
            console.log(listadoble.print())
            break;
        case "insertAt":
            listadoble.insertAt(datolde.value, indexlde.value)
            console.log(listadoble.print())
            break;
        case "removeFirst":
            listadoble.removeFirst()
            console.log(listadoble.print())
            break;
        case "removeLast":
            listadoble.removeLast()
            console.log(listadoble.print())
            break;
        case "removeData":
            listadoble.removeData(datolde.value)
            console.log(listadoble.print())
            break;
        case "removeFrom":
            listadoble.removeFrom(indexlde.value)
            console.log(listadoble.print())
            break;
        case "reversePrint":
            listadoble.reversePrint()
            break;
        case "getSize":
            listadoble.getSize()
            break;
        case"isEmpty":
            listadoble.isEmpty()
            break;

    }
})
//                  Lista Enlazada Circular
let datoec = document.querySelector('#datoec')
let indexec = document.querySelector('#indexec')
let selectec = document.querySelector('#selectec')
let insertec = document.querySelector('#insertec')

insertec.addEventListener('click',() => {
    switch(selectec.value){
        case "insertFirst":
            listaEC.insertFirst(datoec.value)
            console.log(listaEC.print())
            break;
        case "insertLast":
            listaEC.insertLast(datoec.value)
            console.log(listaEC.print())
            break;
        case "insertAt":
            listaEC.insertAt(datoec.value, indexec.value)
            console.log(listaEC.print())
            break;
        case "removeFirst":
            listaEC.removeFirst()
            console.log(listaEC.print())
            break;
        case "removeLast":
            listaEC.removeLast()
            console.log(listaEC.print())
            break;
        case "removeData":
            listaEC.removeData(datoec.value)
            console.log(listaEC.print())
            break;
        case "removeFrom":
            listaEC.removeFrom(indexec.value)
            console.log(listaEC.print())
            break;
        case "removeList":
            listaEC.removeList()
            console.log(listaEC.print())
            break;
        case "getSize":
            listaEC.getSize()

            break;
        case"getLast":
            listaEC.getLast()

            break;
        case"getFirst":
            listaEC.getFirst()

            break;

    }
})


//                  Lista Doblemente Enlazada Circular
let datoldec = document.querySelector('#datoldec')
let indexldec = document.querySelector('#indexldec')
let selectldec = document.querySelector('#selectldec')
let insertldec = document.querySelector('#insertldec')

insertldec.addEventListener('click',() => {
    switch(selectldec.value){
        case "insertFirst":
            listaCDE.insertFirst(datoldec.value)
            console.log(listaCDE.print())
            break;
        case "insertLast":
            listaCDE.insertLast(datoldec.value)
            console.log(listaCDE.print())
            break;
        case "insertAt":
            listaCDE.insertAt(datoldec.value, indexldec.value)
            console.log(listaCDE.print())
            break;
        case "removeFirst":
            listaCDE.removeFirst()
            console.log(listaCDE.print())
            break;
        case "removeLast":
            listaCDE.removeLast()
            console.log(listaCDE.print())
            break;
        case "removeData":
            listaCDE.removeData(datoldec.value)
            console.log(listaCDE.print())
            break;
        case "removeFrom":
            listaCDE.removeFrom(indexldec.value)
            console.log(listaCDE.print())
            break;
        case "removeList":
            listaCDE.removeList()
            console.log(listaCDE.print())
            break;
        case "reversePrint":
            listaCDE.reversePrint()
            break;
        case"getSize":
            listaCDE.getSize()
            break;
        case"isEmpty":
            listaCDE.isEmpty()
            break;

    }
})



// switch(select.value){
//     case 'push'
//     pila.push()
//     break
    
//     case 'pop'
//     pila.pop()
//     break
    
// }


//                              Metodos

//    pila
// pila.push(5)
// pila.push(77)
// pila.push(30)
// pila.pop()
// pila.peek()
// console.log(pila.size())
// console.log(pila.print())

//    Cola
// cola.enqueue(10)
// cola.enqueue(5)
// cola.enqueue(3)
// console.log(cola.print())
// cola.dequeue()
// console.log(cola.peek())
// console.log(cola.size())
// console.log(cola.isEmpty())
// console.log(cola.print())

//      Lista Enlazada
// listaenlazada.insertBefore(10)
// listaenlazada.insertAfter(9)
// listaenlazada.insertBefore(11)
// listaenlazada.insertAt(5,0)
// listaenlazada.removeFirst()
// listaenlazada.removeLast()
// listaenlazada.removeData(9)
//  listaenlazada.removeFrom(0)
// console.log(listaenlazada.isEmpty())
// console.log(listaenlazada.getSize())
// console.log(listaenlazada.print())
// listaenlazada.removeList()
// console.log(listaenlazada.print())

//  lista doblemente enlazada
//listadoble.insertFirst(5)
//listadoble.insertFirst(4)
//listadoble.insertLast(6)
// listadoble.insertAt(2, 1)
// listadoble.removeFirst()
// listadoble.removeLast()
//listadoble.removeData(2)//borra dato en especifico
//listadoble.removeFrom(0)
//console.log( listadoble.print())
//console.log(listadoble.reversePrint())
//console.log(listadoble.getSize())
// console.listadoble.isEmpty()

//  lista enlazada circular !!!falta acomodar el getlast
// listaEC.insertFirst(4)
// listaEC.insertFirst(5)
// listaEC.insertFirst(6)
// console.log(listaEC.print())
// listaEC.insertLast(4)
// listaEC.insertAt(33, 4)
// console.log(listaEC.print())
// listaEC.removeFirst()
// listaEC.insertLast()
// listaEC.removeData(33)
// console.log(listaEC.print())
// listaEC.removeFrom(3)
// console.log(listaEC.print())
// console.log(listaEC.getSize())
// console.log(listaEC.getLast())
// console.log(listaEC.getFirst())

//doblemente enlazada circular
// listaCDE.insertFirst(4)
// listaCDE.insertFirst(3)
// listaCDE.insertLast(6)
// listaCDE.insertAt(5 ,3)
// listaCDE.removeFirst()
// listaCDE.removeLast()
// listaCDE.removeData(3)
// listaCDE.removeFrom(0)
// listaCDE.removeList()
// console.log(listaCDE.getSize())

