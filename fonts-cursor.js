const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// Change fonts
css = css.replace("font-family: 'Roboto', sans-serif;", "font-family: 'Inter', sans-serif;");
css = css.replace(/font-family: 'Playfair Display', serif;/g, "font-family: 'Inter', sans-serif; letter-spacing: -0.02em;");
// Some headings might be Playfair
css = css.replace("cursor: none; /* Hide default cursor */", "/* cursor: none removed */");

// Remove custom cursor CSS
css = css.replace(/\/\* Custom Cursor \*\/[\s\S]*?\/\* Reset cursor[\s\S]*?is fine\. \*\//, '');

fs.writeFileSync('styles.css', css);

let html = fs.readFileSync('index.html', 'utf8');
// Remove custom cursor divs
html = html.replace('<div class="custom-cursor"></div>\r\n    <div class="cursor-follower"></div>', '');
html = html.replace('<div class="custom-cursor"></div>\n    <div class="cursor-follower"></div>', '');
fs.writeFileSync('index.html', html);

let js = fs.readFileSync('script.js', 'utf8');
// Remove custom cursor JS
js = js.replace(/\/\/ Custom Cursor Implementation[\s\S]*?\}\);/g, '');
fs.writeFileSync('script.js', js);
console.log('Fonts updated and custom cursor removed.');
