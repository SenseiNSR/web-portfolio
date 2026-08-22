const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace font imports
html = html.replace(
    '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">',
    '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">'
);

fs.writeFileSync('index.html', html);
console.log('Updated font imports');
