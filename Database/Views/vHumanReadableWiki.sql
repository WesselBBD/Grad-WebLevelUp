DROP VIEW IF EXISTS vHumanReadableWiki;
GO

CREATE VIEW vHumanReadableWiki AS
SELECT [W].[WikiId], [U].[UserName], [F].[FanName], [W].[WikiURI], [W].[WikiTitle], [W].[WikiContent]
FROM [dbo].[Wiki] AS [W]
LEFT JOIN [dbo].[Fan] AS [F] ON [F].[FanId] = [W].[AssoiciatedFan]
LEFT JOIN [dbo].[User] AS [U] ON [U].UserId = [W].[WritenByUser];
GO
