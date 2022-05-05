DROP PROCEDURE IF EXISTS pGetUserById;
DROP PROCEDURE IF EXISTS pGetUserByEmail;
GO

CREATE PROCEDURE pGetUserById @ID UNIQUEIDENTIFIER
AS
  SELECT *
  FROM [dbo].[User] AS [U] 
  WHERE [U].[UserId] = @ID

GO

CREATE PROCEDURE pGetUserByEmail @EMAIL [VARCHAR](150)
AS
  SELECT *
  FROM [dbo].[User] AS [U] 
  WHERE [U].[UserEmail] = @EMAIL

GO
