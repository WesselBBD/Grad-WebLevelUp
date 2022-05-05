:setvar path "C:\Users\bbdnet2573\Documents\Grad\Grad-WebLevelUp\Database" -- change to your own FULL path to database
GO
:r $(path)\Tables\CreateUserTable.sql
:r $(path)\Tables\CreateFanTable.sql
:r $(path)\Tables\CreateWikiTable.sql
:r $(path)\Tables\CreateBrandTable.sql

:r $(path)\Tables\ForeignKeys.sql

GO

:r $(path)\Views\vFullFans.sql
:r $(path)\Views\vHumanReadableWiki.sql

GO

:r $(path)\Procedures\pGetFan.sql
:r $(path)\Procedures\pGetUser.sql

GO

:r $(path)\Data\UserData.sql
:r $(path)\Data\BrandData.sql
:r $(path)\Data\FanData.sql
:r $(path)\Data\WikiData.sql

GO
