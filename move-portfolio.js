const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Extract portfolio section
const portfolioRegex = /(<!-- Portfolio Section \(Projects\) -->[\s\S]*?<\/section>)/;
const match = html.match(portfolioRegex);

if (match) {
    const portfolioBlock = match[0];
    // Remove from original place
    html = html.replace(portfolioBlock, '');
    
    // Insert after About section
    const aboutEndRegex = /(<!-- About Section -->[\s\S]*?<\/section>)/;
    html = html.replace(aboutEndRegex, `$1\n\n            ${portfolioBlock}`);
    
    fs.writeFileSync('index.html', html);
    console.log('Moved Portfolio section');
} else {
    console.log('Portfolio section not found');
}
