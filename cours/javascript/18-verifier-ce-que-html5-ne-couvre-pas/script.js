const formulaire = document.querySelector("#formulaire-joueur");
const champPseudo = document.querySelector("#pseudo");
const compteurPseudo = document.querySelector("#compteur-pseudo");
const champDateNaissance = document.querySelector("#date-naissance");
const champDateArrivee = document.querySelector("#date-arrivee");
const messageFormulaire = document.querySelector("#message-formulaire");

const limitePseudo = 20;

function mettreAJourCompteur() {
    const caracteresRestants = limitePseudo - champPseudo.value.length;
    compteurPseudo.textContent = caracteresRestants + " caractère(s) restant(s)";
}

champPseudo.addEventListener("input", mettreAJourCompteur);
mettreAJourCompteur();

champPseudo.addEventListener("invalid", function () {
    champPseudo.setCustomValidity("Merci d'indiquer le pseudo du joueur avant de valider le formulaire.");
});

champPseudo.addEventListener("input", function () {
    champPseudo.setCustomValidity("");
});

function verifierDatesCoherentes() {
    if (champDateNaissance.value && champDateArrivee.value) {
        const dateNaissance = new Date(champDateNaissance.value);
        const dateArrivee = new Date(champDateArrivee.value);

        if (dateArrivee < dateNaissance) {
            champDateArrivee.setCustomValidity("La date d'arrivée ne peut pas être antérieure à la date de naissance.");
        } else {
            champDateArrivee.setCustomValidity("");
        }

        champDateArrivee.reportValidity();
    }
}

champDateNaissance.addEventListener("change", verifierDatesCoherentes);
champDateArrivee.addEventListener("change", verifierDatesCoherentes);

formulaire.addEventListener("submit", function (evenement) {
    evenement.preventDefault();
    messageFormulaire.textContent = "Formulaire valide : toutes les vérifications sont passées.";
    console.log("Formulaire valide : l'envoi réel sera pris en charge par le PHP, à partir de la Partie 20.");
});
