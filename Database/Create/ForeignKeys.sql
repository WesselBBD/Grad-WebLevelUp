USE [OnlyFansDB]
GO

ALTER TABLE [dbo].[Fan] ADD CONSTRAINT [FK_Fan_BrandId] FOREIGN KEY (BrandId) REFERENCES [dbo].[Brand] ([BrandId]);
ALTER TABLE [dbo].[Wiki] ADD CONSTRAINT [FK_Wiki_WritenBy] FOREIGN KEY (WritenByUser) REFERENCES [dbo].[User] ([UserId]);
ALTER TABLE [dbo].[Wiki] ADD CONSTRAINT [FK_Wiki_AssoiciatedFan] FOREIGN KEY (AssoiciatedFan) REFERENCES [dbo].[Fan] ([FanId]);
GO
