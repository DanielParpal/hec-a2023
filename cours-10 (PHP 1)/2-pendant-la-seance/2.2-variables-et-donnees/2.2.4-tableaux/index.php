<?php 

// définition d'un tableau
$prenoms = [
	"Camille", // 0
	"Jean", // 1
	"Benoit" // 2
];

var_dump($prenoms);
echo "<br>";

// accéder à un élément grâce à son index numérique
echo $prenoms[2];
echo "<br>";

// modifier un élément grâce à son index numérique
$prenoms[2] = "Benoît";
echo $prenoms[2];
echo "<br>";

// quantité d'éléments (.length en JS)
echo count($prenoms);
echo "<br>";

// ajouter un élément à la fin du tableau (.push())
$prenoms[] = "Gilbert";
var_dump($prenoms);
echo "<br>";


?>







