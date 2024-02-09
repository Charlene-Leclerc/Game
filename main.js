document.addEventListener('DOMContentLoaded', function() {
    // Votre code JavaScript ici
    const choices = ['Pierre', 'Feuille', 'Ciseaux'];

    // Fonction pour générer le choix de l'ordinateur
    function computerPlay() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    // Fonction pour déterminer le résultat du jeu
    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        if (playerSelection === computerSelection) {
            return "Égalité!";
        } else if (
            (playerSelection === 'pierre' && computerSelection === 'ciseaux') ||
            (playerSelection === 'feuille' && computerSelection === 'pierre') ||
            (playerSelection === 'ciseaux' && computerSelection === 'feuille')
        ) {
            return "Vous avez gagné!";
        } else {
            return "Vous avez perdu!";
        }
    }

    // Fonction principale du jeu
    document.getElementById('game-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const playerSelection = document.getElementById('player-choice').value;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        resultsDiv.innerHTML += `<p>Vous avez choisi : ${playerSelection}</p>`;
        resultsDiv.innerHTML += `<p>L'ordinateur a choisi : ${computerSelection}</p>`;
        resultsDiv.innerHTML += `<p>${result}</p>`;
    });
});