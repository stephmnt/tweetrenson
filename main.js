// Le bouton
const ba = document.querySelector('#generer');
var citation = document.querySelector('.tweet');


// Elements de langage
const texte1 = ["Aujourd'hui", "Désormais", "Dès à présent", "Plus que jamais", "Dorénavant", "Dès maintenant"];
const texte2 = ["c’est l’esprit de responsabilité qui doit primer", "le temps est venu d'être à la hauteur des enjeux", "nous avons tous à saisir l'importance du moment", "nous devons avoir le tempérament adapté"];
const texte3 = ["pour tous", "pour chacun", "pour le bien commun", "pour la France", "pour les français", "pour l'avenir"];
const texte4 = ["Il exige", "Il impose", "Il nécessite", "Il implique", "Il demande", "Il appelle"];
const texte5 = ["le rassemblement", "la cohésion", "le sens du sacrifice", "l'esprit républicain", "la solidarité", "le sens du devoir"];
const texte6 = ["de la majorité présidentielle", "du gouvernement", "de ma carrière", "de la République", "de la France", "de notre histoire"];
const texte7 = ["des françaises et des français", "des Parisiens", "des citoyens", "de nos concitoyens", ];
const texte8 = ["J’y contribuerai", "Je serai présent", "Vous avez mon 06", "Comptez sur moi", "Je serai avec vous", "Vous avez mon engagement"];


// Fonction pour choisir un element du tableau de facon aleatoire
function aleatoire(arr) {
    return arr[Math.floor(Math.random() * arr.length )];
}

// Actions du bouton
ba.addEventListener('click', () => {
	citation.innerHTML = aleatoire(texte1)+ ", " + aleatoire(texte2)+ ", " + aleatoire(texte3)+ ".<br /><br />" + aleatoire(texte4)+ " " + aleatoire(texte5)+ ". <br /><br />C'est l'intérêt " + aleatoire(texte6)+ ", c'est aussi et surtout l'intérêt " + aleatoire(texte7)+ ".<br /><br />" + aleatoire(texte8)+ ".";


});
	// le bouton tweeter
	var a = citation.innerHTML;
	document.getElementsByClassName('twitter-share-button')[0].setAttribute("data-text", a);

