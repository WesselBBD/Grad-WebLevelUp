-- Create a new table called 'Fan'
USE [OnlyFansDB]
GO
-- Create the table
CREATE TABLE [dbo].[Brand]
(
    [BrandId] [SMALLINT] NOT NULL,                        -- primary key column
	[BrandName] [VARCHAR](150) NOT NULL
);
GO

ALTER TABLE [dbo].[Brand] ADD CONSTRAINT [PK_BrandId] PRIMARY KEY CLUSTERED ([BrandId] ASC);
GO
