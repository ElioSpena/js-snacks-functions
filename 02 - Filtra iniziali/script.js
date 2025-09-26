/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const divider = '","';

// Dichiara la funzione qui.

function firstLetterAs(name) {
    let result = "";
    for (let i = 0; i < name.length; i++) {
        const curWord = name[i];
        if (curWord[0] === "A") {
            result += curWord + divider;
        } else {

        }
    }
    return result;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetterAs(names))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]