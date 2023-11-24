<?php 

// 1. Connexion à la DB
include 'db/connexion-MySQL.php';

// 2. Sélection des données
include 'db/select-publications.php';

// 3. Inclure le fichier d'affichage
include 'views/app.html.php';

?>