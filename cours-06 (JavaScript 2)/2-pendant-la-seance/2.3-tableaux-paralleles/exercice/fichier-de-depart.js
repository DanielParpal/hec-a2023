// 2. Modélisez la description de chacune des recettes, en utilisant un tableau qui respecte l'ordre du tableau des titres de recettes précédemment créé en 2.2.
var titres = [
	"GALETTES À L'AVOINE ET CHOCOLAT",
	"CARRÉS DE POPCORN AU CHOCOLAT CARAMEL FLEUR DE SEL",
	"BOULES D'ÉNERGIE AUX DEUX CHOCOLATS, PISTACHES ET FRAMBOISES"
];

// 3. Effectuez la même chose pour l'url de chacune des recettes. 
// Note : vous aurez à cliquer sur le bouton "Voir la recette!" afin de récupérer l'url correspondant.
var urls = [
	"https://www.chocolatsfavoris.com/recettes/galettes-a-l-avoine-et-chocolat",
	"https://www.chocolatsfavoris.com/recettes/carres-de-popcorn-au-chocolat-caramel-fleur-de-sel",
	"https://www.chocolatsfavoris.com/recettes/boules-d-energie-aux-deux-chocolats-pistaches-et-framboises"
];

// 4. Modifiez les instructions à l'intérieur de la boucle pour afficher les informations reliées aux descriptions et aux urls. Vous êtes libres de choisir le format que vous souhaitez pour l'affichage dans la console (eg. une seule ligne par recette, plusieurs lignes, phrase complète vs la valeur, etc.).
var descriptions = [
	"Vos prochaines galettes préférées!",
	"Si simples et divins!",
	"Une recette simple, délicieuse et parfaite pour les lunch!"
];

// 5. Assurez-vous que les données affichées à l'intérieur d'une même itération soient bien reliées! (parallèles)
for (var i = 0; i < titres.length; i = i + 1) {
	console.log("Le titre est : " + titres[i]);
	console.log("L'url est : " + urls[i]);
	console.log("La description est : " + descriptions[i]);
	console.log('--------------');
}









