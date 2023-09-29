// Écriture d'une condition avec le if else

var totalPanier = 120;
totalPanier = totalPanier - 30; // 90


// si le total du panier est supérieur ou égal à 100$
// on offre la livraison gratuite
if (totalPanier >= 100) {
	console.log("On offre la livraison gratuite");
} else {
	console.log("On n'offre pas la livraison gratuite");
}



// deuxième condition
// si un client a plus de deux items dans son panier,
// nous offrirons 50% sur le troisième item
var quantiteItems = 3;
var seuilReduction = 3;
if (quantiteItems >= seuilReduction) {
	console.log("Vous aurez le troisième item à moitié prix.");
}






