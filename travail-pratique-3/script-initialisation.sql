
DROP TABLE IF EXISTS `ventes_cremes_glacees`;

CREATE TABLE `ventes_cremes_glacees` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `saveur` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `quantite` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
