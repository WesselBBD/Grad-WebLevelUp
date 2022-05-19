-- Create a new table called 'Fan'
USE `OnlyFansDB`;

DROP TABLE IF EXISTS `User`;

CREATE TABLE IF NOT EXISTS `User`
(
    `UserId` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
    `UserName` VARCHAR(100) NOT NULL,
    `UserEmail` VARCHAR(150) NOT NULL,
    `CategoryId` SMALLINT NOT NULL
);

ALTER TABLE `User` ADD CONSTRAINT `PK_UserId` PRIMARY KEY CLUSTERED (`UserId`);
