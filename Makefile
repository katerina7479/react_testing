

all:
	echo "test"

prereqs:
	npm install

watch:
	#watchify -o build/js/CardItemItest.js js/CardItemTest.js
	watchify -v -o build/js/LoginTest.js js/LoginTest.js


json_server:
	http-server -p 8888

open:
	open http://localhost:8888/html/Login.html
