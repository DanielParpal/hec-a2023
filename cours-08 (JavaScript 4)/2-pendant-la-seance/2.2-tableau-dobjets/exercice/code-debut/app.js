// 1. Téléchargez les fichiers de départ. Notre point de départ correspond à la modélisation des deux premières recettes sous la forme d'objets (ce qui a été fait en 2.1, mais juste la portion "modélisation").
var recette_A = {
	titre: "GALETTES À L'AVOINE ET CHOCOLAT",
	description: "Vos prochaines galettes préférées! ",
	url: "https://www.chocolatsfavoris.com/recettes/galettes-a-l-avoine-et-chocolat"
};

var recette_B = {
	titre: "BISCUIT GÉANT DOUBLE CHOCOLAT",
	description: "Qui pourrait résister à un biscuit géant?",
	url: ""
};

// 2. Modélisez deux autres recettes sous la forme d'objets.
// Rappel : https://www.chocolatsfavoris.com/recettes
var recette_C = {
	titre: "CARRÉS DE POPCORN AU CHOCOLAT CARAMEL FLEUR DE SEL",
	description: "Si simples et divins ! ",
	url: "https://www.chocolatsfavoris.com/recettes/carres-de-popcorn-au-chocolat-caramel-fleur-de-sel"
};

var recette_D = {
	titre: "BOULES D'ÉNERGIE AUX DEUX CHOCOLATS, PISTACHES ET FRAMBOISES",
	description: "Une recette simple, délicieuse et parfaite pour les lunch! ",
	url: "https://www.chocolatsfavoris.com/recettes/boules-d-energie-aux-deux-chocolats-pistaches-et-framboises"
};

// 3. Regroupez vos 4 recettes dans un tableau, et assignez-le à une nouvelle variable nommée recettes.
var recettes = [
	recette_A, recette_B, recette_C, recette_D
];

// 4. Affichez votre tableau dans la console, et prenez le temps de l'inspecter.
console.log(recettes);

// 5. Affichez dans la console :
// - Le titre de la recette c
// - La description et l'url de la recette d
// - L'objet représentant la recette b (prenez le temps de l'inspecter dans la console)
// Note : vous devez utiliser votre tableau pour y arriver, et non pas les objets individuels créés précédemment.
console.log(recettes[2]["titre"]);
console.log(recettes[3]["description"], recettes[3]["url"]);
console.log(recettes[1]);

console.log("=========");

// 6. Parcourez votre tableau d'objets, et affichez tous les titres. Les sections 2.2 et 2.3 du cours 6 peuvent vous aider si jamais vous cherchez de l'inspiration.
for (var i = 0; i < recettes.length; i = i + 1) {
	console.log(recettes[i]["titre"]);
}






