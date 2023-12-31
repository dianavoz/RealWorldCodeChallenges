#!/usr/bin/env node

const fs = require('fs');

const option = process.argv[2];
const filePath = process.argv[3];
const NEW_LINE_DELIMITER = '\n';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        return err;
    }

    switch (option) {
        case '-l':
            //Split at the end of the line 
            const countLine = data.split(NEW_LINE_DELIMITER).length - 1;
            if (countLine > 0) {
                process.stdout.write(`${countLine} lines in the ${filePath}${NEW_LINE_DELIMITER}`);
            } else {
                process.stdout.write(`The file is empty.${NEW_LINE_DELIMITER}`);
            }
            break;

        case '-c':
            const countBytes = Buffer.byteLength(data);
            if (countBytes > 0) {
                process.stdout.write(`${countBytes} bytes in the ${filePath}${NEW_LINE_DELIMITER}`);
            }
            break;
        case '-w':
            // Split by whitespace characters
            const words = data.split(/\s+/); 
            const wordCount = words.length;
            if (wordCount > 0) {
                process.stdout.write(`${wordCount} words in the ${filePath}${NEW_LINE_DELIMITER}`);
            }
            break;

        default:
            console.error(`Invalid option: ${option}`);
    }
});
