// 2. Modéliser un tableau avec 3 titres de recette.
var recettes = [
	"GALETTES À L'AVOINE ET CHOCOLAT",
	"CARRÉS DE POPCORN AU CHOCOLAT CARAMEL FLEUR DE SEL",
	"BOULES D'ÉNERGIE AUX DEUX CHOCOLATS, PISTACHES ET FRAMBOISES"
];
console.log(recettes);

// 3. Mettez en place une boucle permettant de parcourir chacun des éléments.
// Note : gardez en tête les sous-concepts requis pour y arriver.
for (var i = 0; i < recettes.length; i = i + 1) {
	console.log("Ce soir, je mangerai : " + recettes[i]);
}

// 4. Affichez chacun des éléments dans la console, en les mettant dans un contexte (ex. Ce soir, je mangerai : Gâteau éclaté).