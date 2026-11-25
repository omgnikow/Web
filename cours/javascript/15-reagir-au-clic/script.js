const bouton = document.querySelector('#bouton-details');
const details = document.querySelector('#details-equipe');

bouton.addEventListener('click', function () {
    details.classList.toggle('cachee');

    if (details.classList.contains('cachee')) {
        bouton.textContent = 'Afficher les joueurs';
    } else {
        bouton.textContent = 'Masquer les joueurs';
    }
});
