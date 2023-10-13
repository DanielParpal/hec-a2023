// 4. Sélectionnez, grâce à jQuery, toutes les cellules du corps de la table (td) et modifiez leur contenu html grâce à la méthode .html(). Vous pouvez mettre le contenu de votre choix.
// 4.1 Visualisez que cela fonctionne bien.
$("td").html("10");

// 5. Sélectionnez, grâce à jQuery, tous les éléments ayant un attribut "class" de "temperature-negative" et modifiez leur contenu html grâce à la méthode .html()
// 5.1 Visualisez que cela fonctionne bien.
$(".temperature-negative").html("5");

// 6. Sélectionnez, grâce à jQuery, l'élément ayant un attribut "id" de "journee-demain" et modifiez son contenu html grâce à la méthode .html()
// 6.1 Visualisez que cela fonctionne bien.
$("#journee-demain").html("2");

// on peut remplacer tout le contenu (incluant des balises)
$("body").html("<p>TEST</p>");