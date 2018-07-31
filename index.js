var fs = require('fs');
const parser = require('subtitles-parser');

//Parse and save srt
const srt = fs.readFileSync('test.srt', 'utf8');
var data = parser.fromSrt(srt);

const updateTimeStamps = sub => {
  for (let i = 0; i < sub.length; i++) {
    console.log('outer loop');

    for (let j = i + 1; j <= i + 1; j++) {
      if (sub[j] === undefined) return;

      let iMS = sub[i].endTime.substr(9, 3);
      let jMS = sub[j].startTime.substr(9, 3);

      console.log('inner');
      if (iMS > jMS) {
        console.log(`iMS: ${iMS} should be the same as jMS: ${jMS}`);
        sub[j].startTime = sub[j].startTime.replace(/\d{3}/g, iMS);
        console.log(sub[j], sub[i]);
      }
    }

    const updatedSrt = parser.toSrt(sub);
    fs.writeFile('updatedTest.srt', updatedSrt, err => {
      if (err) throw err;
      console.log('Updated Srt created');
    });
  }
  return sub;
};

updateTimeStamps(data);

// const updatedSub = updateTimeStamps(data);
// const updatedSrt = parser.toSrt(updatedSub);
