// Définition d'un tableau (array)
// on utilise les crochets carrés, et la virgule
// pour séparer les éléments
var produits = [
	"jeans",
	"chapeau",
	"chandail"
];

console.log(produits);

console.log(produits[1]);

// Pour assigner une nouvelle valeur à un élément,
// on utilise une syntaxe similaire à celle vue.
produits[2] = "chandail en laine";

console.log(produits[2]);

// index dynamique
// indice pour TP2 -> cela sera très utile
var monIndex = 1;
console.log(produits[monIndex]);

// Ajouter des éléments à mon tableau
// les éléments sont toujours ajoutés à la fin
produits.push('bottes');
console.log(produits);

// Propriété permettant de connaître la quantité d'éléments dans un tableau
console.log(produits.length);

// Pour savoir si le tableau contient un élément
console.log(produits.includes("jeans")); // true
console.log(produits.includes("bas de laine")); // false










