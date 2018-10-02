const mocha = require("mocha");
const expect = require("expect");
const parser = require("subtitles-parser");
const fs = require("fs");
const { msNormalizer } = require("./msNormalizer.js");
const {
  getDefaultDirPath,
  getFileName,
  writeSubToFile
} = require("./utils.js");

const file = "../test.srt";

// const data = fs.readFileSync("test.srt", "utf8");
// const parsedData = parser.fromSrt(data);

describe("msNormalizer Tests", done => {
  it("should return an object of matching length to the input", () => {
    expect(Object.keys(parsedData).length).toBe(5);
  });

  it("should be of type object", () => {
    expect(typeof parsedData).toBe("object");
  });

  xit("should update incongruous MS data", () => {
    let normalizedOutput = msNormalizer(parsedData);
    console.log(parsedData);
  });
});
