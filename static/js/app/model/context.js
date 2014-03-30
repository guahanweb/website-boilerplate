define(['backbone'], function (Backbone) {
	"use strict";

	var Context = Backbone.Model.extend({
		initialize: function () {
			// Context is initialized
		}
	}, {
		singleton: null,
		getInstance: function () {
			if (Context.singleton === null) {
				Context.singleton = new Context();
			}
			return Context.singleton;
		}
	});
	return Context;
});
