(function () {
	"use strict";
	var MyGreet = function () {};
	MyGreet.prototype.hi = function (name) {
		return "Hello, " + name + "!";
	};

	var g = new MyGreet();
	g.hi('World');
})();
