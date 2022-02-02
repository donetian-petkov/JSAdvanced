To submit and view comments you must set up a valid database connection in the connect.php to a database, which contains the following table: 

CREATE TABLE IF NOT EXISTS \`comments\` (
	\`id\` int(11) NOT NULL AUTO_INCREMENT,
	\`name\` varchar(255) NOT NULL,
	\`content\` text NOT NULL,
	\`submit_date\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
