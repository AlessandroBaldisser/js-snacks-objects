//creo un array di animali
let arrayAnimali = [
    {nome: "cane", famiglia: "canide", classe: "mammifero"},
    {nome: "gatto", famiglia: "felino", classe: "mammifero"},
    {nome: "gallina", famiglia: "fasianidi", classe: "uccello"},
    {nome: "falco", famiglia: "rapace", classe: "uccello"},
    {nome: "delfino", famiglia: "pesce", classe: "mammifero"}
]

let arrayMammiferi = []  //creo l'array di destinazione
//controllo se gli animali sono mammiferi o no
//per ogni animale controllo la classe

for(let i = 0; i < arrayAnimali.length; i++){
    // se è un mammifero, lo inserisco nell'array di destinazione
    let animaleCorrente = arrayAnimali[i]
    if(animaleCorrente.classe == "mammifero"){
        arrayMammiferi.push(animaleCorrente)
    }
}

console.log(arrayMammiferi)