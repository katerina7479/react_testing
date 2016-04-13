

all:
	echo "test"

prereqs:
	npm install

watch:
	#watchify -o build/js/NewsItemTest.js js/NewsItemTest.js
	#watchify -v -o build/js/NewsHeaderTest.js js/NewsHeaderTest.js
	#watchify -v -o build/js/NewsListTest.js js/NewsListTest.js
	watchify -v -o build/js/app.js js/app.js

json_server:
	http-server -p 8888

open:
	open http://localhost:8888/html/NewsItem.html
