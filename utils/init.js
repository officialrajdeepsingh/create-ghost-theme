
const welcome = require('cli-welcome');
const  {description ,version }  = require('./../package.json');
const unhandled = require('cli-handle-unhandled');


module.exports = () => {
	unhandled();
	welcome({
		title: `create-ghost-theme`,
		tagLine: `by Rajdeep singh`,
		description: description,
		version: version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true
	});
};
