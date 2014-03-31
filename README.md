# Website Boilerplate

This package is intended to provide an easy way to get started with a baseline for building robust
web applications quickly. By using **make**, there are targets available by default to assist with
multiple different options. Here is an overview of some of the technologies and make targets available
currently.

## Server Side

### Makefile
There are a few targets that are available by default in this package. Available targets and their
descriptions are available in the table below:

| Target | Depends | Description |
|--------|-------------|
| ```server``` | ```install test run``` | Sets up and runs the Node.js server to host the app |
| ```install``` | none | This will run ```npm install``` against the current ```package.json``` file in your application root |
| ```test``` | none | Runs Jasmine on all tests in the ```tst/``` directory |
| ```run``` | ```sass``` | Executes node on the ```app.js``` file to spin up the server |
| ```sass``` | none | Runs the SASS CLI on the ```sass/``` directory and outputs to ```static/css/screen.css``` |
| ```hint``` | none | Executes JSHint against all unminified JS files in ```static/js``` |
| ```compile``` | none | Executes Closure Compiler on all JS files in ```lib/``` recursively, minifies them into the same path at ```static/lib``` |

### Node.js

## Client Side

### Require.js

### Backbone.js

### Twitter Bootstrap
