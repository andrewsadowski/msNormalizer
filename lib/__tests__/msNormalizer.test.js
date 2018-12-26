const mocha = require('mocha');
const expect = require('expect');
const parser = require('subtitles-parser');
const fs = require('fs');
const { executeRequest } = require('../msNormalizer.js');
const {
  getDefaultDirPath,
  getFileName,
  writeSubToFile,
  handleDirOfSubs,
  msNormalizer
} = require('../utils.js');

const file = './test.srt';
const dirPath =
  '/Users/andrewsadowski/dev/workTest/subtitle-parser/srt/test.srt';

describe('msNormalizer Tests', done => {
  const file = fs.readFileSync('./test.srt', 'utf-8');
  const fixedFile = fs.readFileSync('./test_msUpdated.srt', 'utf-8');
  const parsedFile = parser.fromSrt(file);
  const parsedFixedFile = parser.fromSrt(fixedFile);

  it('should return an object of matching length to the input', () => {
    expect(parsedFile.length).toBe(5);
  });

  it('should be of type object', () => {
    expect(typeof parsedFile).toBe('object');
  });

  it('should update incongruous MS data', () => {
    expect(parsedFixedFile[0].endTime).toEqual(
      parsedFixedFile[1].startTime
    );
  });
});

describe('Helper function tests', done => {
  it('should get default directory path', () => {
    expect(getFileName(file)).toBe('test');
  });
  it('should return the path associated with file', () => {
    expect(getDefaultDirPath(dirPath)).toBe(
      '/Users/andrewsadowski/dev/workTest/subtitle-parser/srt'
    );
  });
});
