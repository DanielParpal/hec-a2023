// 1. Modélisation des données
// Définition d'un objet
var chandailA = {
	titre: "Maillot solaire à manches longues Astroman",
	prix: 119.95,
	evaluation: 4.5,
};

var chandailB = {
	titre: "Chemise Fjällglim de Fjallraven - Hommes",
	prix: 139.95,
	evaluation: 5
};

var chandailC = {
	titre: "Cotopaxi Mero Organic Flannel Shirt",
	prix: 45.98,
	evaluation: 5 
};

// chandails contient un tableau
// le tableau contient 3 éléments
// chacun des éléments est un objet
var chandails = [
	chandailA, // index: 0
	chandailB, // index: 1
	chandailC  // index: 2
];


console.log(chandails[0]); // ici on verra le chandail A
console.log(chandails[0]["titre"]);
console.log(chandails[0]["prix"]);
console.log("========");


// 2. Écriture des algorithmes
// si jamais la boucle for n'est pas claire: revoir matière cours 6
for (var i = 0; i < chandails.length; i = i + 1) {

	var prix = chandails[i]["prix"];
	if (prix > 100) {
		console.log(chandails[i]["titre"]);
	}

}












