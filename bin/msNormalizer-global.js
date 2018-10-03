#!/usr/bin/env node

const msNormalizer = require('../msNormalizer.js');
const argv = require("yargs")
  .alias("f", "filePath")
  .usage("Usage: add a file with the -f flag")
  .example('node index.js -f "fileName.ext"')
  .help("h").argv;

let filePath;

if (argv.f) {
  filePath = argv.f;
} else {
  filePath = "test.srt";
}

msNormalizer(
  typeof argv.file || typeof argv.f === 'string'
    ? argv.file || argv.f
    : undefined
);
