const ora = require('ora');
const {join, basename} = require('path');
const execa = require('execa');
const alert = require('cli-alerts');
const { green: g, yellow: y, dim: d } = require('chalk');
const copy = require('copy-template-dir');
const questions = require('./questions.js');

const spinner = ora({ text: '' });

async function generate() {
	const vars = await questions();
	const outDir = vars.name;

	const inDirPath = join(__dirname, `../template`);
	const outDirPath = join(process.cwd(), outDir);

	try {
		spinner.start(
			`${y(`Downloading`)} file from internet \n\n${d(`It may take moment…`)}`
		);
		const { stdout, stderr } = await execa.command(
			`git clone https://github.com/officialrajdeepsingh/hello-world.git ${outDir}`
		);
		spinner.stop()
		if (stderr === '128') {
			alert({
				type: `error`,
				msg: `Your internet connection is not working`
			});
		}
	} catch (error) {
		alert({ type: `error`, msg: `Something went wrong!` });
		process.exit(1);
	}

	try {
		spinner.start(
			`${y(`DEPENDENCIES`)} installing…\n\n${d(`It may take moment…`)}`
		);

		process.chdir(outDirPath);
		await execa.command('rm -R package.json');

		copy(inDirPath, outDirPath, vars, async (err, createdFiles) => {
			if (err) throw err;
			createdFiles.forEach(filePath => {
				const fileName = basename(filePath);
			});
		});

		const pkgs = [
			'autoprefixer@latest',
			'postcss@latest',
			'postcss-cli@latest',
			'tailwindcss@latest'
		];

		await execa(`${vars.packageManager}`, [ vars.packageManager ==="npm"? `install`: `add` , ...pkgs]);
		spinner.succeed(`${g(`DEPENDENCIES`)} installed!`);

		alert({
			type: `success`,
			name: `ALL DONE`,
			msg: `\n\n ${y('files')} created in ${d(`./${outDir}`)} directory`
		});
	
		} catch (error) {
		alert({ type: `error`, msg: `Something went wrong!` });
		process.exit(1);
	}

}

module.exports = generate;
