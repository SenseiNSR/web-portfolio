const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Ensure the grid is 5 columns
html = html.replace('grid-template-columns: repeat(4, 1fr);', 'grid-template-columns: repeat(5, 1fr);');

const horseBlock = `<i class="fas fa-horse skill-icon" style="color: var(--accent-color);"></i>
                        <p>Horse Riding</p>
                    </div>`;

const gamingBlock = `
                    <div class="skill-card">
                        <i class="fas fa-gamepad skill-icon" style="color: var(--accent-color);"></i>
                        <p>Gaming</p>
                    </div>`;

if (html.includes(horseBlock)) {
    html = html.replace(horseBlock, horseBlock + gamingBlock);
    fs.writeFileSync('index.html', html);
    console.log('Added gaming right after horse riding.');
} else {
    // try fallback regex
    const regex = /<p>Horse Riding<\/p>\s*<\/div>/;
    html = html.replace(regex, `<p>Horse Riding</p>\n                    </div>` + gamingBlock);
    fs.writeFileSync('index.html', html);
    console.log('Added gaming via regex.');
}

