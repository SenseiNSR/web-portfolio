const fs = require('fs');
let js = fs.readFileSync('script.js', 'utf8');

const modalRegex = /\/\/ Project Modal Logic[\s\S]*?window\.onclick = function\(event\) \{[\s\S]*?\}\r?\n\}/;
js = js.replace(modalRegex, '');

fs.writeFileSync('script.js', js);
console.log('Removed modal JS.');
