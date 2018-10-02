const parser = require("subtitles-parser");
const fs = require("fs");
const path = require("path");
const {
  getDefaultDirPath,
  getFileName,
  writeSubToFile
} = require("./utils.js");
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

/**
 * @param {string} filePath - accepts a string with a path to the subtitle
 * @return {string} sub - returns a subtitle file as well as a properly formatted srt
 */
const msNormalizer = async (filePath => {
  const srt = fs.readFileSync(filePath, "utf8");

  const parsedDirPath = getDefaultDirPath(filePath);
  const subtitleFileName = getFileName(filePath);

  const outputNameAndPath = path.join(
    parsedDirPath + subtitleFileName + "_msUpdated.srt"
  );

  let sub = parser.fromSrt(srt);
  console.log(sub);
  for (let i = 0; i < sub.length; i++) {
    for (let j = i + 1; j <= i + 1; j++) {
      if (sub[j] === undefined) return;
      const msCheckAndUpdate = await (() => {
        //save substring of MS for both preceeding start and end times
        let iMS = sub[i].endTime.substr(9, 3);
        let iSS = sub[i].endTime.substr(6, 2);
        let jMS = sub[j].startTime.substr(9, 3);
        let jSS = sub[j].startTime.substr(6, 2);

        if (iMS > jMS && iSS === jSS) {
          console.log(`iMS: ${iMS} should be the same as jMS: ${jMS}`);
          sub[j].startTime = sub[j].startTime.replace(/\d{3}/g, iMS);
        }
      })();
    }
    const updatedSrt = await parser.toSrt(sub);
    await writeSubToFile(outputNameAndPath, updatedSrt);
  }

  return sub;
})(filePath);

module.exports = {
  msNormalizer
};
