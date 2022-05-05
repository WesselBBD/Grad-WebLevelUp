DROP VIEW IF EXISTS vFullFans;
GO

CREATE VIEW vFullFans AS
SELECT [F].FanId, [F].[ImageURI], [F].[FanName], [B].[BrandName], [F].[FanModel], [F].[FanMaxRPM]
FROM [dbo].[Fan] AS [F]
LEFT JOIN [dbo].[Brand] AS [B] ON [F].[BrandId] = [B].[BrandId];
GO
