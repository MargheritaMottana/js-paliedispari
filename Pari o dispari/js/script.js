/*

Pari e Dispari

1. L'utente sceglie pari o dispari
2. inserisce un numero da 1 a 5.
3. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
4. Sommiamo i due numeri
5. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
6. Dichiariamo chi ha vinto.

*/

// dichiaro il bottone pari
const PariButton = document.getElementById('pari');

// ascolto il click sul bottone
PariButton.addEventListener("click", function () {
    console.log('ho cliccato');

    // Dichiarare il form
    const form = document.getElementById('myform');
    form.classList.remove('none');

    //ascolto il submit del form per ricavare il numero
    form.addEventListener('submit', function (event) {

        // prevengo il comportamento
        event.preventDefault();

        // dichiaro il contenuto dell'input
        const numInput = document.getElementById('numInput')

        // prendo e dichiaro il valore dell'input, mettendo in parseInt per ottenere un numero
        const numUtente = parseInt(numInput.value);
        console.log('numUtente', numUtente, typeof numUtente);

    });
});