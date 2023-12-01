<?php

// 1. Connecter la base de données
include 'db/connexion-MySQL.php';

// 2. Insertion de la nouvelle rangée, conditionnelle à POST (pas besoin pour 2.3)

// 3. Sélection des données
include 'db/select-cours-fitness.php';

// On inclut l'affichage
include 'views/app.html.php';

?>
