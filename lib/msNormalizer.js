const parser = require('subtitles-parser');
const fs = require('fs');
const path = require('path');
const argv = require('yargs')
  .alias('f', 'filePath')
  .usage('Usage: add a file with the -f flag')
  .example('node index.js -f "fileName.ext"')
  .help('h').argv;

let filePath;

if (argv.f) {
  filePath = argv.f;
} else {
  filePath = 'test.srt';
}

/**
 * @param {string} filePath - accepts a string with a path to the subtitle
 * @return {string} sub - returns a subtitle file as well as a properly formatted srt
 */

const msNormalizer = filePath => {
  const srt = fs.readFileSync(filePath, 'utf8');
  let sub = parser.fromSrt(srt);

  for (let i = 0; i < sub.length; i++) {
    for (let j = i + 1; j <= i + 1; j++) {
      if (sub[j] === undefined) return;

      //save substring of MS for both preceeding start and end times
      let iMS = sub[i].endTime.substr(9, 3);
      let jMS = sub[j].startTime.substr(9, 3);

      if (iMS > jMS) {
        console.log(`iMS: ${iMS} should be the same as jMS: ${jMS}`);
        sub[j].startTime = sub[j].startTime.replace(/\d{3}/g, iMS);
      }
    }

    const updatedSrt = parser.toSrt(sub);
    fs.writeFileSync('updatedTest.srt', updatedSrt, err => {
      if (err) throw err;
      console.log('Updated Srt created');
    });
  }
  return sub;
};

msNormalizer(filePath);

/**
 *
 * @param {string} filePath - Takes a filePath to parse
 * @return {string} parsedDirPath - Returns the path without file and extension
 */
const getDefaultDirPath = filePath => {
  let parsedDirPath = filePath.replace(/[^\/]*$/, '');
  defaultDirPath = parsedDirPath;
  return parsedDirPath;
};

module.exports = {
  msNormalizer
};