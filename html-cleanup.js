const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Remove inline grid style
html = html.replace('class="portfolio-grid" style="grid-template-columns: repeat(2, 1fr);"', 'class="portfolio-grid"');

// Simplify About section
// Let's make sure the layout supports the new CSS.
fs.writeFileSync('index.html', html);
console.log('HTML updated.');
