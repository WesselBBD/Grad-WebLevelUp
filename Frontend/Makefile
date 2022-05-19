deploy:
	@aws --profile OF-WEB --region af-south-1   s3 sync . s3://onlyfans.bbdgp.cloud --acl public-read --exclude '.gitignore' --exclude '*.md' --exclude 'Makefile' --exclude 'tests/*' 
