const joueurs = [
    { pseudo: "Nyx", poste: "Duelliste", scoreSaison: 4820 },
    { pseudo: "Marlow", poste: "Support", scoreSaison: 3110 },
    { pseudo: "Grim", poste: "Sentinelle", scoreSaison: 2740 },
    { pseudo: "Vex", poste: "Initiateur", scoreSaison: 3960 },
];

const champRecherche = document.querySelector("#champ-recherche");
const corpsTableau = document.querySelector("#corps-tableau");

function afficherJoueurs(listeJoueurs) {
    let lignesTableau = "";

    for (const joueur of listeJoueurs) {
        lignesTableau += "<tr><td>" + joueur.pseudo + "</td><td>" + joueur.poste + "</td><td>" + joueur.scoreSaison + "</td></tr>";
    }

    corpsTableau.innerHTML = lignesTableau;
}

afficherJoueurs(joueurs);

champRecherche.addEventListener("input", function () {
    const texteRecherche = champRecherche.value.toLowerCase();

    const joueursFiltres = joueurs.filter(function (joueur) {
        return joueur.pseudo.toLowerCase().includes(texteRecherche);
    });

    afficherJoueurs(joueursFiltres);
});
