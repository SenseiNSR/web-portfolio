const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace standard dot and replacement char
html = html.replace(/\uFFFD/g, '&bull;');
html = html.replace(/\u2022/g, '&bull;');

fs.writeFileSync('index.html', html);
console.log('Fixed bullet points.');
