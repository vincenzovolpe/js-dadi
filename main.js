// Chiediamo all'utente un numero a scelta da 1 a 6
var numeroutente = prompt("Inserisci un numero a scelta (tra 0 e  6)");
console.log(numeroutente);

// Tiriamo il dado per il  pc con una funzione random
var numeroestratto = Math.floor(Math.random() * 6) + 1;
console.log(numeroestratto);

// Confrontiamo il nostro numero con quello estratto dal pc
if (numeroutente > numeroestratto) {
    console.log('Complimenti hai vinto!!!');
    console.log('Il dado estratto dal pc è:' + numeroestratto);
}
else {
    console.log('Spiacente hai perso (si vede che non hai barato.....ahahahah');
    console.log('Il numero estratto dal pc è: ' + numeroestratto);
}
