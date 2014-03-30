pwd := $(shell pwd)

server: install test run

install:
	@echo "\\nInstalling dependencies..."
	@npm install

test:
	@echo "\\nRunning tests..."
	@$(pwd)/node_modules/.bin/jasmine-node $(pwd)/tst

run: sass
	@echo "\\nLaunching application..."
	@node $(pwd)/app

sass:
	@echo "\\nCompiling SASS..."
	@$(pwd)/node_modules/.bin/sass-cli -o $(pwd)/static/css/screen.css $(pwd)/sass/*

# Run JSHint on all unminified JS files in the static directory
hint:
	@echo "\\nRunning JSHint..."
	@for f in $$(find static/js -type f -name \*.js ! -name \*-min.js ! -name \*.min.js); do $(pwd)/node_modules/jshint/bin/jshint --config $(pwd)/config/jshint.json $$f; done;

# Run Closure Compiler on all JS files in ./lib/**/* and minifies them into ./static/lib/**/*
compile:
	@echo "\\nClosure Compiler running..."
	@for d in $$(find lib -type d); do mkdir -p static/js/$$d; done;
	@for f in $$(find lib -type f); do F=$$(echo $$f | sed 's/^\(.*\)js$$/static\/\1min.js/'); echo $$($(pwd)/node_modules/closurecompiler/bin/ccjs $$f > $$F); done;
