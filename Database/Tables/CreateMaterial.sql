-- Create a new table called 'Material'
USE `OnlyFansDB`;

DROP TABLE IF EXISTS `Material`;

CREATE TABLE IF NOT EXISTS `Material`
(
    `MaterialId` INT NOT NULL,              -- primary key column
	`MaterialName` VARCHAR(75) NOT NULL,
    `MaterialBubbleHex` BINARY(3) NOT NULL  -- insert with x'00ab25'
);

ALTER TABLE `Material` ADD CONSTRAINT `PK_MaterialId` PRIMARY KEY CLUSTERED (`MaterialId` ASC);
