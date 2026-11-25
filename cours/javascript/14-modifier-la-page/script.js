const pseudoJoueur = "Nyx";
let scoreSaison = 4820;
let nombreDeMatchs = 12;
let scoreMoyen = scoreSaison / nombreDeMatchs;

console.log(pseudoJoueur, scoreMoyen);

const titre = document.querySelector("h1");

titre.textContent = "Nova Sentinels vs Iron Phoenix";
titre.classList.add("titre-modifie");

console.log(titre.outerHTML);
