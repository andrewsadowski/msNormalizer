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
const msNormalizer = filePath => {
  const srt = fs.readFileSync(filePath, "utf8");

  const parsedDirPath = getDefaultDirPath(filePath);
  const subtitleFileName = getFileName(filePath);

  const outputNameAndPath = path.join(
    parsedDirPath + subtitleFileName + "_msUpdated.srt"
  );

  let sub = parser.fromSrt(srt);
  // console.log(sub);
  // console.log(sub.length, sub);
  sub.forEach((subBlock, index) => {
    Object.keys(subBlock).forEach((key, value) => {
      console.log(subBlock[key], value);
    });
    // console.log(subBlock);
    //for (let i in sub) {
    // console.log(sub);
    // if (sub[index].i === undefined) return;
    // //save substring of MS for both preceeding start and end times
    // let iMS = sub[i].endTime.substr(9, 3);
    // let iSS = sub[i].endTime.substr(6, 2);
    // let jMS = sub[j].startTime.substr(9, 3);
    // let jSS = sub[j].startTime.substr(6, 2);
    // // console.log(`iSS: ${iSS}, jSS: ${jSS}`);
    // if (iMS > jMS && iSS === jSS) {
    //   console.log(`iMS: ${iMS} should be the same as jMS: ${jMS}`);
    //   sub[j].startTime = sub[j].startTime.replace(/\d{3}/g, iMS);
    // }
    //}
  });
  // const updatedSrt = parser.toSrt(sub);
  // writeSubToFile(outputNameAndPath, updatedSrt);

  // return sub;
};

msNormalizer(filePath);

module.exports = {
  msNormalizer
};

/**
 * async function someFunction() {
    const j = 10;
    for (let i = 0; i < j; i++) {
        // wait for the promise to resolve before advancing the for loop
        await asynchronousProcess();
        console.log(i);
    }
}

 */