-- Create a new table called 'Fan'
USE [OnlyFansDB]
GO
-- Create the table
CREATE TABLE [dbo].[Fan]
(
    [FanId] [UNIQUEIDENTIFIER] NOT NULL,                        -- primary key column
	[FanName] [VARCHAR](150) NOT NULL,
	[FanModel] [VARCHAR](150) NOT NULL,
    [BrandId] [SMALLINT] NOT NULL
);
GO

ALTER TABLE [dbo].[Fan] ADD CONSTRAINT [PK_FanId] PRIMARY KEY CLUSTERED ([FanId]);
GO
