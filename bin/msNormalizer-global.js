#!/usr/bin/env node

const chalk = require('chalk');
const { msNormalizer, handleDirOfSubs } = require('../lib/utils.js');
const argv = require('yargs')
  .alias('f', 'filePath')
  .usage('Usage: add a file path with the -f flag')
  .example('msNormalizer -f "/absolute/path/to/file.srt"')
  .alias('d', 'dirPath')
  .usage('Usage: add a directory path with the -d flag')
  .example('msNormalizer -d "/absolute/path/of/dir/"')
  .help('h').argv;

let filePath;
let dirPath;

if (argv.f) {
  filePath = argv.f;
} else if (argv.d) {
  dirPath = argv.d;
} else {
  filePath = 'test.srt';
}

const executeRequest = (path => {
  if (filePath) {
    msNormalizer(path);
  } else if (dirPath) {
    handleDirOfSubs(path);
  }
  console.log(
    `${chalk.magenta.bold('\n\nSUCCESS!\n')}${chalk.cyan.bold(
      `Files can be found here: ${chalk.red.bold(path)}`
    )}`
  );
})(filePath || dirPath);
