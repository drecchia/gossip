/*
	Tasks:

	$ gulp 			: Runs the "js" and "css" tasks.
	$ gulp js		: Runs the "js" tasks.
*/

const { parallel, series } = require('gulp');

const js = require('./gulp/js');

/*
	$ gulp
*/
exports.default = (cb) => {
	parallel(js.all)(cb);
};

/*
	$ gulp js
*/
exports.js = (cb) => {
	js.all(cb);
};

/*
	$ gulp watch
*/
exports.watch = (cb) => {
	parallel(series(js.all, js.watch))(cb);
};