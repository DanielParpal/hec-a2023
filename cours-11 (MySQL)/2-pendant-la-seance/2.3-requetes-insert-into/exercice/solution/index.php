<?php

// 1. Connexion à la DB
include 'db/connexion-MySQL.php';

// 2. Insertion des données
include 'db/insert-into-articles.php';

// 3. Sélection des données
include 'db/select-articles.php';

// 4. Affichage des données
include 'views/app.html.php';

?>