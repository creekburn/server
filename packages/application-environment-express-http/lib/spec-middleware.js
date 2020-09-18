'use strict';

module.exports = function setup(spec) {
	console.log('Spec', spec);
	return function (req, res, next) {
		console.log('Spec Handler.');
		next();
	}
};
