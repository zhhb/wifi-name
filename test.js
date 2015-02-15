'use strict';

var test = require('ava');
var wifiname = require('./');

test(function (t) {
	t.plan(2);

	wifiname(function (err, name) {
		t.assert(!err, err);

		if (process.env.CI) {
			t.assert(true);
			return;
		}

		t.assert(name);
	});
});