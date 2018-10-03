# SRT-Millisecond-Normalizer

This node CLI checks for discrepancies in the MS portion of the timestamp from the end-time and start-time of subtitles. It then updates the MS to be continuous. Install globally via NPM.

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
msNormalizer -f '/path/to/file.srt'
```

An srt will be generated in the same location as the srt provided with all millisecond discrepancies normalized.
