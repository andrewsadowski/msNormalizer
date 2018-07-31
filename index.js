var fs = require('fs');
const parser = require('subtitles-parser');

//Parse and save srt
const srt = fs.readFileSync('test.srt', 'utf8');
var data = parser.fromSrt(srt);

const updateMSTimeStamps = sub => {
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

updateMSTimeStamps(data);

// const updatedSub = updateTimeStamps(data);
// const updatedSrt = parser.toSrt(updatedSub);
