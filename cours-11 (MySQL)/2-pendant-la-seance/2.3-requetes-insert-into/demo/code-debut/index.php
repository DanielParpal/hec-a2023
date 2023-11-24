<?php 

// 1. Connection à la base de données
include 'db/connexion-MySQL.php';

// 2. Insérer les données
include 'db/insert-into-publications.php';

// 3. Sélectionner les données
include 'db/select-publications.php';

// 4. Afficher les données
include 'views/app.html.php';


?> 