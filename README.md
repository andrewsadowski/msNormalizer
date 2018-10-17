<div align="center"> 
<img width="auto" height="auto" src="https://s3-us-west-2.amazonaws.com/andrew-sadowski-images/msNormalizer.png">
</div>

Have a subtitle that has overlapping millisecond timestamp values? This NodeJS CLI checks for discrepancies in the MS portion of the timestamp from the end-time and start-time of subtitles. It then updates the MS to be continuous. Install globally via NPM.

### Prerequisites

- NodeJS

### Installing

Install dependencies via NPM/Yarn to run

```
npm install -g srt-ms-normalizer
```

### Running Application

After installing globally via NPM:

```
msNormalizer -f '/absolute/path/to/file.srt'
```

An srt will be generated in the same location as the srt provided with all millisecond discrepancies normalized. It will have '\_msUpdated' appended to the file name.

If you have an entire directory of srts you'd like to run through, use the directory flag as follows:

```
msNormalizer -d '/absolute/path/to/dir/'
```
