DROP PROCEDURE IF EXISTS pGetFanById;
DROP PROCEDURE IF EXISTS pGetFansByModel;
DROP PROCEDURE IF EXISTS pGetFansByBrandId;
GO

CREATE PROCEDURE pGetFanById @ID UNIQUEIDENTIFIER
AS
  SELECT *
  FROM [dbo].[vFullFans] AS [F] 
  WHERE [F].[FanId] = @ID

GO

CREATE PROCEDURE pGetFansByModel @MODEL VARCHAR(150)
AS
  SELECT *
  FROM [dbo].[vFullFans] AS [F] 
  WHERE [F].[FanModel] = @MODEL

GO

CREATE PROCEDURE pGetFansByBrandId @BRANDID SMALLINT
AS
  SELECT *
  FROM [dbo].[Fan] AS [F] 
  WHERE [F].[BrandId] = @BRANDID

GO
