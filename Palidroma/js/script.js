/*

Palidroma

1. Chiedere all'utente di inserire una parola
2. Creare una funzione per capire se la parola inserita è palindroma

*/

// dichiaro il form
const form = document.getElementById('myform');

// ascolto il form
form.addEventListener('submit', function (event) {
    event.preventDefault()

    // dichiaro il contenuto dell'input
    const wordInput = document.getElementById('wordInput')

    // prendo e dichiaro il valore dell'input
    const word = wordInput.value;
    console.log('word', word, word.length, typeof word);

    // richiamo la funzione
    const risultato = checkReverse(word);

    if (risultato) {
        document.getElementById('risultato').innerText = "La tua parola è palindroma"
    }
    else {
        document.getElementById('risultato').innerText = "La tua parola NON è palindroma"
    }

    // creo una funzione per controllare che la parola sia palindroma

    /* 
    per svingolarmi dalla variabile globale,
    devo inserire tra nell'argomento, una parola che non sia tra le variabile globale.
    In questo modo, quando la richiamo, inserisco il valore che le devo passare e che userà per funzionare.
    */

    function checkReverse(userWord) {

        // vuota perché attende il valore dall'input
        let reverseWord = '';


        for (i = userWord.length - 1; i >= 0; i--) {
            console.log(userWord[i]);

            reverseWord += userWord[i];
            // si può scrivere anche così...
            // reverseuserWord = reverseuserWord + userWord[i];
        }
        console.log('reverseWord', reverseWord, reverseWord.length, typeof reverseWord);

        if (userWord == reverseWord) {
            return true;
        }
        else {
            return false;
        };
    };

});