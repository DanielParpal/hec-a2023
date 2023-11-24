<?php 

// 1. Créer la connexion vers le serveur de DB
include 'db/connexion-MySQL.php';

// 2. Sélectionner les données
include 'db/select-articles.php';

// 3. Afficher les données
include 'views/app.html.php';

?>