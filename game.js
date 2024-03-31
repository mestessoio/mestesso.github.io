// Inizializza il punteggio a 0
let score = 0;

// Funzione da chiamare quando l'immagine viene cliccata
function imageClicked() {
    // Incrementa il punteggio
    score++;

    // Aggiorna il punteggio visualizzato sulla pagina
    document.getElementById('score').innerText = "Punteggio: " + score;
}

// Assegna l'evento click all'immagine
document.querySelector('.quadrato img').addEventListener('click', imageClicked);
