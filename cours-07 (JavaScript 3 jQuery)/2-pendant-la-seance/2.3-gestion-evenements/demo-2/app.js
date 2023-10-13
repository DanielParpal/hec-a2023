// 1. méthode .data() qui permet de récupérer
// la valeur stockée dans un attribut data
// ceci fonctionnera avec data-test
var produitId = $("#produit-0").data("test");
console.log(produitId);


// tableaux de produits
var produits = [
	"Produit A",
	"Produit B",
	"Produit C"
];

// 2. Sélecteur $(this)
$(".btn-click").on("click", function() {
	var produitId = $(this).data("test"); // data-test
	console.log(produitId);

	// ??? Comment pourrai-je accéder à l'élément correspondat 
	// du tableau grâce à produitId
	
});