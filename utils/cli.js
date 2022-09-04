const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	}
};

const commands = {
	create: { desc: `Create a new ghost theme` }
};

const helpText = meowHelp({
	name: `create-ghost-theme`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};
module.exports = meow(helpText, options);
