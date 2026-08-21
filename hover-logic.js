const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/onclick="this\.classList\.toggle\('expanded'\)"/g, '');
fs.writeFileSync('index.html', html);

let css = fs.readFileSync('styles.css', 'utf8');
css = css.replace('.portfolio-item.expanded .portfolio-dropdown {', '.portfolio-item:hover .portfolio-dropdown {');
css = css.replace('.portfolio-item.expanded {', '.portfolio-item:hover {');

fs.writeFileSync('styles.css', css);
console.log('Switched to hover logic.');
