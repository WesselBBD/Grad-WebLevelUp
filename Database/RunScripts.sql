:setvar path "" -- change to your own FULL path to database
GO
:r $(path)\Create\CreateUserTable.sql
:r $(path)\Create\CreateFanTable.sql
:r $(path)\Create\CreateWikiTable.sql
:r $(path)\Create\CreateBrandTable.sql

:r $(path)\Create\ForeignKeys.sql

GO

:r $(path)\Data\UserData.sql
:r $(path)\Data\BrandData.sql
:r $(path)\Data\FanData.sql

GO
