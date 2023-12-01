DROP TABLE IF EXISTS `cours_fitness`;

CREATE TABLE `cours_fitness` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `instructeur` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `titre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `cours_fitness` (`id`, `date`, `instructeur`, `titre`)
VALUES
	(1,'22 décembre 2023','Martha','X-fit (Klub)'),
	(2,'26 décembre 2023','Paul','Yoga Flow avec musique'),
	(3,'31 décembre 2023','Caroline','Bootcamp et course');
