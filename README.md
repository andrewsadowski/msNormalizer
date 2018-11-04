<div align="center"> 
<img width="auto" height="auto" src="https://s3-us-west-2.amazonaws.com/andrew-sadowski-images/msNormalizer.png">
</div>
<br />
<p align="center">
  <a href="https://www.npmjs.com/package/srt-ms-normalizer">
  <img src="https://img.shields.io/badge/npm_package-v2.0.0-brightgreen.svg?style=flat-square" alt="npm package version" />
  </a>
    <a href="https://github.com/prettier/prettier">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="code style" />
  </a>
</p>

Have a subtitle that has overlapping millisecond timestamp values? This NodeJS CLI checks for discrepancies in the MS portion of the timestamp from the end-time and start-time of subtitles. It then updates the MS to be continuous. Install globally via NPM.

### Prerequisites

- NodeJS

### Installing

Install dependencies via NPM/Yarn to run

```
npm install -g srt-ms-normalizer
```

### Running Application

After installing globally via NPM, run on either a single file or directory:

#### Single File

```
msNormalizer -f '/absolute/path/to/file.srt'
```

#### Directory

```
msNormalizer -d '/absolute/path/to/dir/'
```

An srt will be generated in the same location as the srt or directory provided with all millisecond discrepancies normalized. It will have '\_msUpdated' appended to the file name.
