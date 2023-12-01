<?php 

/**
 * Retourne toutes les lignes de la table des ventes par saveur
 * La variable $ventes contiendra toutes ces lignes
 */
$query = $db->query('SELECT * from ventes_cremes_glacees');
$ventes = $query->fetchAll(PDO::FETCH_ASSOC);

?>