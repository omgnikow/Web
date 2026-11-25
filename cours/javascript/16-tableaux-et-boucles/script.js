const joueurs = [
    { pseudo: "Nyx", poste: "Duelliste", scoreSaison: 4820 },
    { pseudo: "Marlow", poste: "Support", scoreSaison: 3110 },
    { pseudo: "Grim", poste: "Sentinelle", scoreSaison: 2740 },
    { pseudo: "Vex", poste: "Initiateur", scoreSaison: 3960 },
];

let lignesTableau = "";

for (const joueur of joueurs) {
    lignesTableau += "<tr><td>" + joueur.pseudo + "</td><td>" + joueur.poste + "</td><td>" + joueur.scoreSaison + "</td></tr>";
}

document.querySelector("#corps-tableau").innerHTML = lignesTableau;

console.log(lignesTableau);
