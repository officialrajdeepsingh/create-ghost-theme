const alert = require('cli-alerts');

module.exports = info => {
	alert({
		type: `warning`,
		name: `DEBUG LOG`,
		msg: `Warning `
	});

	console.log(info);
	console.log();
};
