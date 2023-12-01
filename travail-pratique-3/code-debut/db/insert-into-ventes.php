<?php 

// Variables utilisées dans la requête SQL d'insertion
$saveur = "chocolat";
$quantite = 15; 

// Ajoute une ligne à la table des ventes
$saveur = $db->quote($saveur);
$query = "INSERT INTO ventes_cremes_glacees (saveur, quantite) VALUES ($saveur, $quantite)";
$db->exec($query);

?>