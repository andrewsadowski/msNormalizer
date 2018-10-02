const fs = require('fs');

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

/**
 *
 * @param {string} filePath - Takes a path as a string to parse
 * @return {string} subtitleFileName - Returns only the filename, removing path and file extension
 */
const getFileName = filePath => {
  let subtitleFileName;
  subtitleFileName = filePath.replace(/^.*[\\\/]/, '');
  subtitleFileName = subtitleFileName.replace(/(.srt)/, '');
  return subtitleFileName;
};

/**
 *
 * @param {string} outputNameAndPath - Path and Name of output
 * @param {object} subtitle - Object consisting of updated subtitle file
 */
const writeSubToFile = (outputNameAndPath, subtitle) => {
  fs.writeFileSync(outputNameAndPath, subtitle, err => {
    if (err) throw err;
    console.log('Updated Srt created');
  });
};

module.exports = {
  getDefaultDirPath,
  getFileName,
  writeSubToFile
};
