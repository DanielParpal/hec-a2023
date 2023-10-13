// Première manipulation
// Sélection de type élément
$("p").html("Bonjour <span>Monde!</span>");

// Sélection de type "class"
// Exemple de création de la sélection à l'extérieur
// des parenthèses
// Ce type de composition dynamique sera nécessaire
// pour le TP2
var maSelection = "error"
$(".feedback-" + maSelection).html("Hello");

// Sélection de type "id"
$("#first-error").html("Hola");