const parser = require('subtitles-parser');
var fs = require('fs');
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
 * @return {string} sub - returns a subtitle file (via fs) as well as a properly formatted srt
 */

const msNormalizer = filePath => {
  const srt = fs.readFileSync(filePath, 'utf8');
  var sub = parser.fromSrt(srt);

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

msNormalizer(data);

module.exports = {
  msNormalizer
};
