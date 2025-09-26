/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function firstWord(name) {
    let result = [];
    for (let i = 0; i < name.length; i++) {
        const curElement = name[i];
        const FirstWord = curElement[0];
        result[i] = FirstWord;
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstWord(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]