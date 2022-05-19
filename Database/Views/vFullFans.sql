USE `OnlyFansDB`;

DROP VIEW IF EXISTS `vFullFans`;

CREATE VIEW `vFullFans` AS
SELECT BIN_TO_UUID(`F`.`FanId`,true), `F`.`FanName`, `C`.`CategoryName` AS `FanCategoryName`, `F`.`FanRPM`, `F`.`FanCFM`, `F`.`FanSpanMM`, `F`.`FanImageURL`, `F`.`FanStars`, `MB`.`MaterialName` AS `FanBaseColourName`, HEX(`MB`.`MaterialBubbleHex`) AS `FanBaseColourHex`, `MA`.`MaterialName` AS `FanAccentColourName`, HEX(`MA`.`MaterialBubbleHex`) AS `FanAccentColourHex`
FROM `Fan` AS `F`
LEFT JOIN `Category` AS `C` ON `F`.`CategoryId` = `C`.`CategoryId`
LEFT JOIN `Material` AS `MB` ON `F`.`FanBaseColour` = `MB`.`MaterialId`
LEFT JOIN `Material` AS `MA` ON `F`.`FanAccentColour` = `MA`.`MaterialId`;
