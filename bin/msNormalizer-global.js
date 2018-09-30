#!/usr/bin/env node

const msNormalizer = require('../msNormalizer.js');
const argv = require('yargs').argv;

console.log(
  msNormalizer(typeof argv.file === 'string' ? argv.file : undefined)
);
