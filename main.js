/*
// Chiediamo all'utente un numero a scelta da 1 a 6
var numeroutente = prompt("Inserisci un numero a scelta (tra 1 e 6)");
console.log(numeroutente);

// Tiriamo il dado con una funzione random
var numeroestratto = Math.floor(Math.random() * 6) + 1;
console.log(numeroestratto);

// Confrontiamo il nostro numero con quello estratto
if (numeroutente > numeroestratto) {
    console.log('Complimenti hai vinto!!!');
    console.log('Il dado estratto dal pc è:' + numeroestratto);
}
else {
    console.log('Spiacente hai perso (si vede che non hai barato.....ahahahah');
    console.log('Il numero estratto dal pc è: ' + numeroestratto);
}
*/

// Versione avanzata del gioco dei dadi: Utente contro PC
var risposta = true;
while (risposta) {
    // Resetto i dadi e i messaggi visualizzati
    document.getElementById('mostra-dado-utente').setAttribute("class", "notvisible");
    document.getElementById('mostra-dado-pc').setAttribute("class", "notvisible");
    document.getElementById('risultato').setAttribute("class", "notvisible");
    // Mostriamo titolo del gioco
    document.getElementById("titolo").innerHTML = "LANCIO DEI DADI";

    // Messaggio al cliente per lanciare il dado
    alert('LANCIA IL TUO DADO');

    // Tiriamo il dado per l'utente con una funzione random
    var dadoutente = (Math.floor(Math.random() * 6) + 1);

    // Stampiamo il punteggio del dado dell' utente
    document.getElementById('mostra-dado-utente').setAttribute("class", "visible");
    document.getElementById("utente").innerHTML = "Tu";
    document.getElementById("imgdadoutente").src = "img/" + dadoutente + ".png";


    // Messaggio al cliente per far lanciare il dado al computer
    alert("FAI LANCIARE IL DADO AL COMPUTER");
    // Tiriamo il dado per il PC con una funzione random
    var dadopc = Math.floor(Math.random() * 6) + 1;

    // Stampiamo il punteggio del dado dell' utente
    //document.getElementById("mostra-dado-pc").setAttribute("class", "visibile");
    document.getElementById('mostra-dado-pc').setAttribute("class", "visible");
    document.getElementById("pc").innerHTML = "Computer";
    document.getElementById("imgdadopc").src = "img/" + dadopc + "pc.png";

    // Confrontiamo il punteggio dell'utente con quello del PC
    document.getElementById('risultato').setAttribute("class", "visible");
    if (dadoutente > dadopc) {
        document.getElementById("risultato").innerHTML = "Complimenti hai vinto!!!";
        document.getElementById("risultato").style.color = "green";
    }
    else {
        document.getElementById("risultato").innerHTML = "Purtroppo hai perso, ritenta la fortuna!!!";
        document.getElementById("risultato").style.color = "red";

    }
    risposta = confirm('VUOI GIOCARE ANCORA?');
}
document.getElementById('risultato').innerHTML = "Sei uscito dal gioco, torna quando vuoi!!!";
document.getElementById("risultato").style.color = "purple";
