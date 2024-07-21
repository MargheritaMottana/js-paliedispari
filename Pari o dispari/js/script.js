/*

Pari e Dispari

1. L'utente sceglie pari o dispari - DONE
2. inserisce un numero da 1 a 5 - DONE
3. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione) - DONE, ma non bene ):
4. Sommiamo i due numeri - DONE
5. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) - DONE, ma non bene ):
6. Dichiariamo chi ha vinto - DONE

*/

// dichiaro il bottone PARI
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

        // Genero un numero random
        let x = Math.floor((Math.random() * 5) + 1);
        console.log('x', x, typeof x)

        // Sommo il numero dell'utente + il numero generato dal pc
        let sum = parseInt(numUtente + x)
        console.log('sum', sum, typeof sum)

        // uso una funzione per decretare se il numero finale sia pari o dispari
        function numeroFinale() {
            if (sum % 2 == 0) {

                // comunico in pagina se l'utente ha vinto
                document.getElementById("risultato").innerText = 'Il numero che ho genera to è: ' + x + '. La somma è: ' + sum + '. Complimenti, hai vinto!';
                return true;
            }
            else {

                // comunico in pagina se l'utente ha perso
                document.getElementById("risultato").innerText = 'Il numero che ho genera to è: ' + x + '. La somma è: ' + sum + '. Hai perso, ritenta!';
                return false;
            }
        };
        console.log('Il numero ' + sum + ' è pari?', numeroFinale());
    });
});

// dichiaro il bottone DISPARI
const DispariButton = document.getElementById('dispari');

// ascolto il click sul bottone
DispariButton.addEventListener("click", function () {

    const form = document.getElementById('myformDispari');
    form.classList.remove('none');

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const numInput = document.getElementById('numInputDispari')

        const numUtente = parseInt(numInput.value);
        console.log('numUtente', numUtente, typeof numUtente);

        let x = Math.floor((Math.random() * 5) + 1);
        console.log('x', x, typeof x)

        let sum = parseInt(numUtente + x)
        console.log('sum', sum, typeof sum)

        function numeroFinale() {
            if (sum % 2 != 0) {

                document.getElementById("risultato").innerText = 'Il numero che ho genera to è: ' + x + '. La somma è: ' + sum + '. Complimenti, hai vinto!';
                return true;
            }
            else {

                document.getElementById("risultato").innerText = 'Il numero che ho genera to è: ' + x + '. La somma è: ' + sum + '. Hai perso, ritenta!';
                return false;
            }
        };
        console.log('Il numero ' + sum + ' è dispari?', numeroFinale());
    });
});
