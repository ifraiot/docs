build:
	cd website && npm run build

start:
	cd website && npm start

remote:
	git remote add upstream https://github.com/ifraiot/docs.git


fetch_rebase:
	git fetch upstream
	git rebase upstream/master