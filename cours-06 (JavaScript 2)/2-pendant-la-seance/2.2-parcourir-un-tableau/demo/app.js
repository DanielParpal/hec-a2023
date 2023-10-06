// Idée #1 - Définir
var produits = [
	"jeans", // 0
	"t-shirt", // 1
	"chapeau", // 2
	"bas de laine" // 3
];

// Idée #2 - Afficher un seul élément avec son index
console.log(produits[0]); // jeans
console.log(produits[1]);
console.log(produits[2]);

console.log("===========");

// Idée #3 - Déterminer la quantité d'éléments dans un tableau
console.log(produits.length);

console.log("===========");

// l'utilisateur ajoute un produit au panier
produits.push("manteau");

// Idée #4 - Utiliser une boucle
// Idée #6 - Rendre la condition dynamique, en utilisant
// la propriété .length
for (var i = 0; i < produits.length; i = i + 1) {
	// Idée #5 - Utiliser la variable i comme index dynamique
	console.log(produits[i]);
}











