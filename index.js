#!/usr/bin/env node

const init = require('./utils/init.js');
const { input, flags, showHelp } = require('./utils/cli.js');
const log = require('./utils/log.js');
const generate = require('./utils/generate.js');



const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && showHelp(0);
	await generate();
	debug && log(flags);
})();
