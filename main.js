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
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choisissez Pierre, Feuille ou Ciseaux :");
        const computerSelection = computerPlay();
        console.log(`Vous avez choisi : ${playerSelection}`);
        console.log(`L'ordinateur a choisi : ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}

// Lancer le jeu
game();
