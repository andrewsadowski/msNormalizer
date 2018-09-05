const mocha = require('mocha');
const expect = require('expect');
const parser = require('subtitles-parser');
const fs = require('fs');
const { msNormalizer } = require('./index.js');

const data = fs.readFileSync('test.srt', 'utf8');
const parsedData = parser.fromSrt(data);

describe('msNormalizer Tests', done => {
  it('should return an object of matching length to the input', () => {
    expect(Object.keys(parsedData).length).toBe(5);
  });
});
