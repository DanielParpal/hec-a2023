// 1. Modélisation des données
var tailles = [5, 6, 7, 8, 9, 10, 11, 12];

var botteA = {
	marque: 'UGG',
	nom: 'CLASSIC MINI PLATFORM Women AAAAAAAAAAA',
	imageSrc: 'images/ugg-classic-mini-platform.jpeg',
	imageAlt: 'Ugg classic mini platform',
	taillesDispo: [5, 8]
};

var botteB = {
	marque: 'UGG',
	nom: 'NEUMEL PLATFORM Women',
	imageSrc: 'images/ugg-neumel-platform.jpeg',
	imageAlt: 'Ugg neumel platform',
	taillesDispo: [6, 8, 10]
};

var botteC = {
	marque: 'UGG',
	nom: 'CLASSIC MINI II Women',
	imageSrc: 'images/ugg-classic-mini-ii.jpeg',
	imageAlt: 'Ugg classic mini ii',
	taillesDispo: [7, 8, 9, 10]
};

var botteD = {
	marque: 'UGG',
	nom: 'CLASSIC ULTRA MINI Women',
	imageSrc: 'images/ugg-classic-ultra-mini.jpeg',
	imageAlt: 'Ugg classic ultra mini',
	taillesDispo: [6, 9]
};

var botteE = {
	marque: 'ASDFASDFAS',
	nom: 'CLASSIC ULTRA MINI Women',
	imageSrc: 'images/ugg-classic-ultra-mini.jpeg',
	imageAlt: 'Ugg classic ultra mini',
	taillesDispo: [5]
};

var bottes = [
botteA, botteB, botteC, botteD, botteE,
];

var tailleId;

// 2. Génération dynamique de l'état initial
for (var i = 0; i < tailles.length; i = i + 1) {
	$("#boutonsFiltreTaille").append('<button type="button" class="btn btn-outline-dark btn-filtre-taille ml-2" data-taille-id="' + tailles[i] + '">' + tailles[i] + '</button></div>');
}

for (var i = 0; i < bottes.length; i = i + 1) {
	var contenuHTML = '<div class="col-3 div-botte" id="botte-' + i + '">';
	contenuHTML = contenuHTML + '<div class="card" style="width: 100%;">';
	contenuHTML = contenuHTML + '<img src="' + bottes[i]["imageSrc"] + '"';
	contenuHTML = contenuHTML + 'class="card-img-top" ';
	contenuHTML = contenuHTML + 'alt="' + bottes[i]["imageAlt"] + '" />';
	contenuHTML = contenuHTML + '<div class="card-body">';
	contenuHTML = contenuHTML + '<h5 class="card-title">' + bottes[i]["marque"] + '</h5>';
	contenuHTML	= contenuHTML + '<p class="card-text">' + bottes[i]["nom"] + '</p>';
	contenuHTML = contenuHTML + '<a href="#" class="btn btn-primary">Ajouter</a></div></div></div>';
	$("#produits").append(contenuHTML);
}

// 3. Écriture des algos dynamiques
// On définit un gestionnaire d'événements qui observe 
// les clicks sur les boutons de filtre (tailles)
$(".btn-filtre-taille").on("click", function() {
	console.log('Clic sur btn filtre');
	// Mettre le bouton venant d'être cliqué en foncé
	// On réinitialise l'état dans un première
	$(".btn-filtre-taille").removeClass("btn-dark");
	$(".btn-filtre-taille").addClass("btn-outline-dark");

	// On donne l'état spécifique
	$(this).removeClass("btn-outline-dark");
	$(this).addClass("btn-dark");

	// On récupère la taille du bouton venant d'être cliqué
	tailleId = $(this).data("taille-id");

	// masquer toutes les bottes (on réinitialise l'état de départ)
	$(".div-botte").hide();

	// boucle pour parcourir le tableau des bottes
	for (var i = 0; i < bottes.length; i = i + 1) {
		// si la taille venant d'être cliquée est disponible pour la botte: bottes[i]
		if (bottes[i]["taillesDispo"].includes(tailleId)) {
			// on affiche la botte à l'écran
			$("#botte-" + i).show();
		}
	}
});

// On affiche la taille dans la console au moment du clic du bouton "Afficher la taille"
$("#afficher-taille").on('click', function() {
	console.log(tailleId);
});










