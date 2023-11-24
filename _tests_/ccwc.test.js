const fs = require('fs');
const { execSync } = require('child_process');

const ccwcScriptPath = '../challenges/js-wc-tool/src/ccwc.js';
const testFilePath = '../challenges/js-wc-tool/test.txt';

// Run the ccwc.js script and capture its output
const output = execSync(`node ${ccwcScriptPath} -l ${testFilePath}`);

describe('ccwc.js tests', () => {
    const executeCommand = (command) => {
        try {
            return execSync(command, { encoding: 'utf-8' }).trim();
        } catch (error) {
            return error.stdout.toString().trim();
        }
    };

    beforeEach(() => {
        // Reset the test file before each test
        fs.writeFileSync(testFilePath, ''); 
    });

    afterEach(() => {
        // Clean up the test file after each test
        fs.unlinkSync(testFilePath); 
    });

    it('should return the right number of lines', () => {
        fs.writeFileSync(testFilePath, 'Line 1\nLine 2\nLine 3\n');

        const command = `node ${ccwcScriptPath} -l ${testFilePath}`;
        const result = executeCommand(command);

        expect(result).toBe('3 lines in the ../challenges/js-wc-tool/test.txt');
    });

    it('should return the right number of bytes', () => {
        fs.writeFileSync(testFilePath, 'Hello, world!');

        const command = `node ${ccwcScriptPath} -c ${testFilePath}`;
        const result = executeCommand(command);

        const expectedBytes = Buffer.byteLength('Hello, world!');
        expect(result).toBe(`${expectedBytes} bytes in the ../challenges/js-wc-tool/test.txt`);
    });
     it('should return the right number of words', () => {
    fs.writeFileSync(testFilePath, 'Hello, world!');

    const command = `node ${ccwcScriptPath} -w ${testFilePath}`;
    const result = executeCommand(command);

    expect(result).toBe("2 words in the ../challenges/js-wc-tool/test.txt");
});

});
