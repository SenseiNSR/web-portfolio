const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /<h2 class="section-title center">Contact Me<\/h2>/;
const newTitle = `<h2 class="section-title center">Let's Build Something Useful.</h2>
                <p style="text-align: center; color: var(--text-secondary); margin-bottom: 40px;">Currently open to software engineering & AI-ML internship opportunities.</p>`;

html = html.replace(regex, newTitle);
fs.writeFileSync('index.html', html);
console.log('Contact section updated');
