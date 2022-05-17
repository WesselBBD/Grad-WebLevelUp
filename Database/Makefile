build:
	@cat CreateDatabase.sql > Complete.sql

	@cat Tables/CreateCategoryTable.sql >> Complete.sql
	@cat Tables/CreateMaterial.sql >> Complete.sql
	@cat Tables/CreateFanTable.sql >> Complete.sql
	@cat Tables/ForeignKeys.sql >> Complete.sql

	@cat Views/vFullFans.sql >> Complete.sql
	@cat Procedures/pGetFan.sql >> Complete.sql

	@cat Data/CategoryData.sql >> Complete.sql
	@cat Data/MaterialData.sql >> Complete.sql
	@cat Data/FanData.sql >> Complete.sql
