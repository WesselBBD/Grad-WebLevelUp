-- Forign Keys
USE `OnlyFansDB`;

ALTER TABLE `Fan` ADD CONSTRAINT `FK_Fan_CategoryId` FOREIGN KEY (CategoryId) REFERENCES `Category` (`CategoryId`);
ALTER TABLE `Fan` ADD CONSTRAINT `FK_Fan_FanBaseColour` FOREIGN KEY (FanBaseColour) REFERENCES `Material` (`MaterialId`);
ALTER TABLE `Fan` ADD CONSTRAINT `FK_Fan_FanAccentColour` FOREIGN KEY (FanAccentColour) REFERENCES `Material` (`MaterialId`);
