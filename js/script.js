// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


let chilometri = prompt('Quanti km vuoi percorrere?')
console.log(chilometri);

let etaUtente = prompt('Quanti anni hai?')
console.log(etaUtente);

let prezzoBiglietto = chilometri * 0.21;
console.log(prezzoBiglietto);

if (etaUtente < 18) {
    prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto/100)*20);
} 
else if (etaUtente > 65) {
    prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto/100)*40);
}
else {
    prezzoBiglietto = prezzoBiglietto;
}

console.log(prezzoBiglietto.toFixed(2));
