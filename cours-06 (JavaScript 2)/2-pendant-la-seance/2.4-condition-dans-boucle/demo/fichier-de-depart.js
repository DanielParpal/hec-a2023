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
	118.94
];


for (var i = 0; i < prix.length; i = i + 1) {
	var prixMaximal = 150;
	// console.log(prix[i]);
	// console.log(prix[i] < 200);
	if (prix[i] < prixMaximal) {
		console.log("Le soulier " + titres[i] + " a un prix inférieur à " + prixMaximal + "$.");
	}
	// console.log('---------');
}








