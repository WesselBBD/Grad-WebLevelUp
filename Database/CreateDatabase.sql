-- Create a new database called 'OnlyFansDB'
USE master;
IF EXISTS (SELECT * FROM sys.databases WHERE [name] = N'OnlyFansDB')    -- see https://blog.greglow.com/2021/06/24/reliably-dropping-a-sql-server-database-if-it-exists/
BEGIN
    ALTER DATABASE [OnlyFansDB] SET SINGLE_USER WITH ROLLBACK IMMEDIATE;  -- as per https://stackoverflow.com/questions/33890085/how-to-drop-a-database-when-its-currently-in-use
    DROP DATABASE [OnlyFansDB];
END;
GO

CREATE DATABASE OnlyFansDB
COLLATE Latin1_General_CI_AS;        -- see https://docs.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support?view=sql-server-ver15#Server-level-collations
GO


USE OnlyFansDB;
GO

