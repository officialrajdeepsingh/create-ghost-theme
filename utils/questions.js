var ask = require('./ask.js');

module.exports = async () => {
	const name = await ask({
		name: 'name',
		message: 'What is ghost theme name?',
		initial: `hello-world`
	});
	const description = await ask({
		name: `description`,
		message: `What is ghost theme description?`,
		initial: 'Theme description'
	});
	const version = await ask({
		name: `version`,
		message: `The version of ghost theme?`,
		initial: `0.0.1`
	});
	const license = await ask({
		name: `license`,
		message: `what is CLI license?`,
		initial: `UNLICENSED`
	});
	const authorName = await ask({
		name: `authorName`,
		message: `What is a author name?`,
		initial: 'Rajdeep Singh'
	});
	const authorEmail = await ask({
		name: `authorEmail`,
		message: `What is a author email`,
		initial: 'demo@gmail.com'
	});
	const authorUrl = await ask({
		name: `authorUrl`,
		message: `What is a author URL?`,
		initial:"https://officialrajdeepsingh.dev/"
	});
	const packageManager = await ask({
		name: `packageManager`,
		message: `What is a package manager`,
		initial: 'yarn'
	});
	const vars = {
		name,
		description,
		version,
		license,
		authorName,
		authorEmail,
		authorUrl,
		packageManager
	};

	return vars;
};
