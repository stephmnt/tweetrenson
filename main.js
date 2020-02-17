// Le bouton
const ba = document.querySelector('#generer');
let citation = document.querySelector('.tweet');

// Elements de langage
const texte1 = ["Aujourd'hui", "Désormais", "Dès à présent", "Plus que jamais"];
const texte2 = ["c’est l’esprit de responsabilité qui doit primer", "le temps demande d'être à la hauteur des enjeux", "nous avons tous à saisir l'importance du moment", "nous devons avoir le tempérament adapté"];
const texte3 = ["pour tous", "pour chacun", "pour le bien commun", "pour la France"];
const texte4 = ["Il exige", "Il impose", "Il nécessite", "Il implique"];
const texte5 = ["le rassemblement", "la cohésion", "le sens du sacrifice", "l'esprit républicain"];
const texte6 = ["de la majorité présidentielle", "du gouvernement", "de l'équipe parlementaire", "de la République"];
const texte7 = ["des françaises et des français", "des Parisiens", "de ma carrière", "des citoyens"];
const texte8 = ["J’y contribuerai", "Je serai présent", "Vous avez mon 06", "Comptez sur moi"];


// Fonction pour choisir un element du tableau de facon aleatoire
function aleatoire(arr) {
    return arr[Math.floor(Math.random() * arr.length )];
}

// Actions du bouton
ba.addEventListener('click', () => {
// Action du bouton effacer
citation.innerHTML = aleatoire(texte1)+ ", " + aleatoire(texte2)+ ", " + aleatoire(texte3)+ ".<br /><br />" + aleatoire(texte4)+ " " + aleatoire(texte5)+ ". <br /><br />C'est dans l'intérêt " + aleatoire(texte6)+ ", mais surtout dans l'intérêt " + aleatoire(texte7)+ ".<br /><br />" + aleatoire(texte8)+ ".";
});

