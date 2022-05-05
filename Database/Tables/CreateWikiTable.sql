-- Create a new table called 'User'
USE [OnlyFansDB]
GO
-- Create the table
CREATE TABLE [dbo].[Wiki]
(
	[WikiId] [UNIQUEIDENTIFIER] NOT NULL,                        -- primary key column
	[AssoiciatedFan] [UNIQUEIDENTIFIER] NULL,
	[WritenByUser] [UNIQUEIDENTIFIER] NULL,
	[WikiURI] [VARCHAR](200) NOT NULL,
	[WikiTitle] [VARCHAR](50) NOT NULL,
	[WikiContent] [VARCHAR](MAX) NOT NULL
);
GO

ALTER TABLE [dbo].[Wiki] ADD CONSTRAINT [PK_WikiId] PRIMARY KEY CLUSTERED ([WikiId]);
ALTER TABLE [dbo].[Wiki] ADD CONSTRAINT [Unique_WikiURI] UNIQUE ([WikiURI]);
GO