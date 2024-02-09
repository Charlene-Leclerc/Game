document.addEventListener('DOMContentLoaded', function() {
    // Votre code JavaScript ici
    const choices = ['Pierre', 'Feuille', 'Ciseaux'];

    // Fonction pour générer le choix de l'ordinateur
    function computerPlay() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

      // Algorithme 2 : choix fixe de l'ordinateur
      function computerPlayFixed() {
        // Retourne toujours "pierre" pour cet exemple
        return "Pierre";
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
        const computerSelectionFixed = computerPlayFixed();
        const result = playRound(playerSelection, computerSelection);
        const resultFixed = playRound(playerSelection, computerSelectionFixed);
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        resultsDiv.innerHTML += `<p>Vous avez choisi : ${playerSelection}</p>`;
        resultsDiv.innerHTML += `<p>L'ordinateur (aléatoire) a choisi : ${computerSelection}</p>`;
        resultsDiv.innerHTML += `<p>Résultat avec l'ordinateur (aléatoire) : ${result}</p>`;
        resultsDiv.innerHTML+="<p></br>ALGORITHME 2 :</p>";
        resultsDiv.innerHTML += `<p>L'ordinateur a choisi : ${computerSelectionFixed}</p>`;
        resultsDiv.innerHTML += `<p>Résultat avec l'ordinateur (fixe) : ${resultFixed}</p>`;
    });
});