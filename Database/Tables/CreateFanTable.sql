-- Create a new table called 'Fan'
USE `OnlyFansDB`;

DROP TABLE IF EXISTS `Fan`;

CREATE TABLE IF NOT EXISTS `Fan`
(
    `FanId` BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
    `FanName` VARCHAR(50) NOT NULL,
    `CategoryId` SMALLINT NOT NULL,
    `FanRPM` INT NOT NULL,
    `FanCFM` INT NOT NULL,
    `FanSpanMM` INT NOT NULL,
    `FanImageURL` VARCHAR(100) NOT NULL,
    `FanBaseColour` INT NOT NULL,
    `FanAccentColour` INT NOT NULL
);

ALTER TABLE `Fan` ADD CONSTRAINT `PK_FanId` PRIMARY KEY CLUSTERED (`FanId`);
