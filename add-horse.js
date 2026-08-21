const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('• Muay Thai (State Level - Gold)', '• Muay Thai (State Level - Gold)<br>\r\n                                • Horse Riding');

fs.writeFileSync('index.html', html);
console.log('Added Horse Riding');
