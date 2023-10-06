// Définir le tableau des titres
var titres = [
	"Salomon Speedcross 6 Gore-Tex Trail Running Shoes - Women's",
	"Salomon XA Pro 3D v8 Gore-Tex Trail Running Shoes - Women's",
	"Brooks Cascadia 16 Trail Running Shoes - Women's",
	"Salomon Sense Ride 5 Trail Running Shoes - Women's"
];

// Définir le tableau des évaluations
var evaluations = [
	4.5,
	4,
	4.5,
	4.4
];

// Définir le tableau des prix
var prix = [
	209.95,
	134.94,
	79.97,
	118,94
];

// afficher les informations du premier soulier (index 0)
console.log(titres[0] + ", " + evaluations[0] + ", " + prix[0] + "$");
console.log(titres[1] + ", " + evaluations[1] + ", " + prix[1] + "$");
console.log(titres[2] + ", " + evaluations[2] + ", " + prix[2] + "$");

console.log("==========");

for (var i = 0; i < titres.length; i = i + 1) {
	console.log(titres[i] + ", " + evaluations[i] + ", " + prix[i] + "$");
}










