test:
	./node_modules/.bin/mocha --reporter spec

lint:
	jshint numerot.js

.PHONY: test
