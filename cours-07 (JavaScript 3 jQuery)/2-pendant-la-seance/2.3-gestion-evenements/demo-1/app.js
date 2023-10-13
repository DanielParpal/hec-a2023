// Mise en place du gestionnaire d'événement
$("#inputPrix").on("keyup", function() {

	var prix = $("#inputPrix").val();
	console.log(prix);

	if (prix >= 50) {
		// afficher la bannière verte
		$("#alerte-avec-rabais-20").show();
		// masquer la bannière rouge
		$("#alerte-sans-rabais-20").hide();
	} else {
		// afficher la bannière rouge
		$("#alerte-sans-rabais-20").show();
		// masquer la bannière verte
		$("#alerte-avec-rabais-20").hide();
	}

});
