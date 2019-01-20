#!/usr/bin/env node

const chalk = require('chalk');
const { msNormalizer, handleDirOfSubs } = require('../lib/utils.js');
const meow = require('meow');

const cli = meow(
  `
	Usage
	  $ msNormalizer --flag [file/directory absolute path]

	Options
    --file, -f Absolute path to file
    --dir, -d Absolute path to directory

	Examples
	  $ 'msNormalizer -f "/absolute/path/to/file.srt"'
	  $ 'msNormalizer -d "/absolute/path/of/dir/"'
`,
  {
    flags: {
      file: {
        type: 'string',
        alias: 'f'
      },
      dir: {
        type: 'string',
        alias: 'd'
      }
    }
  }
);

const executeRequest = (flags => {
  let path = flags.f || flags.d;
  if (flags.file) {
    msNormalizer(path);
  }
  if (flags.dir) {
    handleDirOfSubs(path);
  }
  return console.log(
    `${chalk.magenta.bold('\n\nSUCCESS!\n')}${chalk.cyan.bold(
      `Files can be found here: ${chalk.red.bold(path)}`
    )}`
  );
})(cli.flags);
