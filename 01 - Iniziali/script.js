/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const divider = '","';


// Dichiara la funzione qui.

function firstWord(name, divider) {
    let result = [];
    for (let i = 0; i < name.length; i++) {
        const curElement = name[i];
        result += curElement[0] + divider;
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstWord(names, divider));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]