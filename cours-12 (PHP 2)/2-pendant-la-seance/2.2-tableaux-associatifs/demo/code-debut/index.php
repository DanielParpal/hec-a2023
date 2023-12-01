<?php 

// Définition d'un tableau associatif
$cours_fitness_A = [
	"titre" => "X-fit",
	"date" => "6 décembre 2023",
	"instructeur" => "Paul",
	"prix" => 20
];

// On l'affiche à l'écran
// var_dump($cours_fitness_A);
// echo "<br>";

// On accède aux valeurs de certaines propriétés
// echo $cours_fitness_A["date"];
// echo "<br>";
// echo $cours_fitness_A["titre"];
// echo "<br>";

// On modifie la valeur pour une certaine propriété
// $cours_fitness_A["instructeur"] = "Marie";
// var_dump($cours_fitness_A);
// echo "<br>";
// $cours_fitness_A["prix"] = $cours_fitness_A["prix"] - 5;
// var_dump($cours_fitness_A);
// echo "<br>";

$cours_fitness_B = [
	"titre" => "Yoga flow avec musique",
	"date" => "12 décembre 2023",
	"instructeur" => "Pauline",
	"prix" => 25
];

include 'app.html.php';

?>



