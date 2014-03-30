(function () {
	"use strict";
	require.config({
		baseUrl: "/js",
		shim: {
			"backbone": {
				deps: ['underscore', 'jquery'],
				exports: 'Backbone'
			},
			"underscore": {
				exports: '_'
			}
		},
		paths: {
			"jquery": "/lib/jquery/jquery-2.1.0.min",
			"backbone": "/lib/backbone/backbone-min",
			"underscore": "/lib/underscore/underscore-min"
		}
	});

	require(['app/model/context'], function (Context) {
		var context = Context.getInstance();
		console.log('Context instance loaded!');
	});
})();
