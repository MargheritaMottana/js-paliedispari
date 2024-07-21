/*

Palidroma

1. Chiedere all'utente di inserire una parola
2. Creare una funzione per capire se la parola inserita è palindroma

*/

//dichiaro il form
const form = document.getElementById('myform');

//ascolto il form
form.addEventListener('submit', function (event) {
    event.preventDefault()

    // dichiaro il contenuto dell'input
    const wordInput = document.getElementById('wordInput')

    // prendo e dichiaro il valore dell'input
    const word = wordInput.value;
    console.log('word', word, typeof word);

    // devo Convertire la stringa in un - char array - ???
    // come faccio a controllare che le lettere siano il loro inverso? bella domanda

    // creo una funzione per controllare che la parola sia palindroma
    function myFunction(?, ?) {

    }

});