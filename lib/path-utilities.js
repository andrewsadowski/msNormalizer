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

const getFileName = filePath => {
  let subtitleFileName;
  subtitleFileName = filePath.replace(/^.*[\\\/]/, '');
  subtitleFileName = subtitleFileName.replace(/(.srt)/, '');
  return subtitleFileName;
};

module.exports = {
  getDefaultDirPath,
  getFileName
};
