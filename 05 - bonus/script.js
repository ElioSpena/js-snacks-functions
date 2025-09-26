/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const date = new Date();


// Dichiara la funzione qui.

function greeatingsAt(userName, userDate) {
    const hours = userDate.getHours();
    console.log(userDate);

    let greetings = "";
    if (hours <= 13) {
        greetings = "Buongiorno";
    } else if (hours <= 17) {
        greetings = "Buon pomeriggio";
    } else {
        greetings = "BuonSera";
    }
    const result = `${greetings} ${userName}.`;
    return result
}

// Invoca la funzione qui e stampa il risultato in console
const greet = greeatingsAt(name, date);
console.log(greet);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.