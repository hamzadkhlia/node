var generator = require('generate-password');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('how many passwords do you need ?    ', number => {
    var passwords = generator.generateMultiple(number, {
        length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true
    });
    console.log(`here your passwords : `,passwords);
    readline.close();
});