const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('<h2 class="section-title">About</h2>', '<h2 class="section-title center">About</h2>');
html = html.replace('<h2 class="section-title">Certifications</h2>', '<h2 class="section-title center">Certifications</h2>');
html = html.replace('<h2 class="section-title">Education</h2>', '<h2 class="section-title center">Education</h2>');

fs.writeFileSync('index.html', html);
console.log('Successfully centered headings.');
