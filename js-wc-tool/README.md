# Unix WC Command Line Tool Cloned with node.js

A small text program that :

* counts the newlines
* counts the words
* counts the characters from a given file

## Installation

1. Clone or download this repository to your local machine.
2. Navigate to the directory containing `ccwc.js`.

## Usage

Run the script using Node.js. You can provide a filename as an argument, or use standard input.

### Counting Lines, Words, or Bytes in a File

* To count lines in a file:
  `node src/ccwc.js -l test.txt `
* To count words in a file:
  `node src/ccwc.js -w test.txt  `
* To count bytes in a file:
  `node src/ccwc.js -c test.txt  
  `

### Test

 `npm test<filename> `
eg. npm test ccwc.test.js
