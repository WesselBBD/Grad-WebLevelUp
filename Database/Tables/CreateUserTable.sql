-- Create a new table called 'User'
USE [OnlyFansDB]
GO
-- Create the table
CREATE TABLE [dbo].[User]
(
    [UserId] [UNIQUEIDENTIFIER] NOT NULL,                        -- primary key column
	[UserEmail] [VARCHAR](150) NOT NULL,
    [UserName] [VARCHAR](150) NOT NULL
);
GO

ALTER TABLE [dbo].[User] ADD CONSTRAINT [PK_UserId] PRIMARY KEY CLUSTERED ([UserId]);
ALTER TABLE [dbo].[User] ADD CONSTRAINT [Unique_UserEmail] UNIQUE ([UserEmail]);
GO
