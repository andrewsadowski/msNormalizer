#!/usr/bin/env node

const msNormalizer = require('../msNormalizer.js');
const argv = require('yargs').argv;
msNormalizer(
  typeof argv.file || typeof argv.f === 'string'
    ? argv.file || argv.f
    : undefined
);
