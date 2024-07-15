/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase 
con il nome e cognome e l’indicazione se può guidare, in base all’età. */

//creo l'array di persone
let persone = [
    {nome: "Mario", cognome: "Rossi", eta: 20},
    {nome: "Marco", cognome: "Verdi", eta: 22},
    {nome: "Anna", cognome: "Neri", eta: 16},
    {nome: "Gaia", cognome: "Bianchi", eta: 18},
    {nome: "Antonio", cognome: "Marroni", eta: 30}
]

//creo un nuovo array
let piloti = []

//per ogni persona controllo se può guidare
for(let i = 0; i < persone.length; i++){
    let personaCorrente = persone[i]
    let etaCorrente = personaCorrente.eta;

    if(etaCorrente >= 18){
        piloti.push(`nome: ${personaCorrente.nome}, cognome: ${personaCorrente.cognome}, può guidare`) //se è maggiorenne può guidare
    }else{
        piloti.push(`nome: ${personaCorrente.nome}, cognome: ${personaCorrente.cognome}, non può guidare`) // altrimenti no
    }
}

console.log(piloti)