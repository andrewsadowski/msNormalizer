const mocha = require('mocha');
const expect = require('expect');
const parser = require('subtitles-parser');
const fs = require('fs');
const { msNormalizer } = require('./msNormalizer.js');
const {
  getDefaultDirPath,
  getFileName,
  writeSubToFile,
  handleDirOfSubs
} = require('./utils.js');

const file = '../test.srt';
const dirPath =
  '/Users/andrewsadowski/dev/workTest/subtitle-parser/srt/test.srt';

describe('msNormalizer Tests', done => {
  xit('should return an object of matching length to the input', () => {
    expect(Object.keys(parsedData).length).toBe(5);
  });

  xit('should be of type object', () => {
    expect(typeof parsedData).toBe('object');
  });

  xit('should update incongruous MS data', () => {
    let normalizedOutput = msNormalizer(parsedData);
    console.log(parsedData);
  });
});

describe('Helper function tests', done => {
  it('should get default directory path', () => {
    expect(getFileName(file)).toBe('test');
  });
  it('should return the path associated with file', () => {
    expect(getDefaultDirPath(dirPath)).toBe(
      '/Users/andrewsadowski/dev/workTest/subtitle-parser/srt/'
    );
  });
});
