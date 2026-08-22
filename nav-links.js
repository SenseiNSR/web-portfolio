const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldLinks = `<ul class="nav-links">\r\n                    <li><a href="#about">About</a></li>\r\n                    <li><a href="#portfolio">Portfolio</a></li>\r\n                    <li><a href="#contact">Contact</a></li>\r\n                </ul>`;
const oldLinks2 = `<ul class="nav-links">\n                    <li><a href="#about">About</a></li>\n                    <li><a href="#portfolio">Portfolio</a></li>\n                    <li><a href="#contact">Contact</a></li>\n                </ul>`;

const newLinks = `<ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>`;

if (html.includes(oldLinks)) {
    html = html.replace(oldLinks, newLinks);
} else if (html.includes(oldLinks2)) {
    html = html.replace(oldLinks2, newLinks);
} else {
    // regex
    const regex = /<ul class="nav-links">[\s\S]*?<\/ul>/;
    html = html.replace(regex, newLinks);
}

fs.writeFileSync('index.html', html);
console.log('Nav links updated');
