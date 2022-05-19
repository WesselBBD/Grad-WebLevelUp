-- Create a new table called 'Catagory'
USE `OnlyFansDB`;

DROP TABLE IF EXISTS `Category`;

CREATE TABLE IF NOT EXISTS `Category`
(
    `CategoryId` SMALLINT NOT NULL,        -- primary key column
	`CategoryName` VARCHAR(50) NOT NULL
);

ALTER TABLE `Category` ADD CONSTRAINT `PK_CategoryId` PRIMARY KEY CLUSTERED (`CategoryId` ASC);
