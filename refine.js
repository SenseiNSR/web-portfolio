const fs = require('fs');

// 1. Update index.html for Experience/Education distinction
let html = fs.readFileSync('index.html', 'utf8');

const oldExp = `<h2 class="section-title center">Experience & Education</h2>`;
const newExp = `<h2 class="section-title center">Professional Experience</h2>`;
html = html.replace(oldExp, newExp);

// Split timeline
const timelineSplitRegex = /(<\/div>\s*<\/div>\s*)(<!-- Item 1 -->\s*<div class="timeline-item">[\s\S]*?<div class="timeline-year">2027<\/div>)/;
html = html.replace(timelineSplitRegex, `$1</div>\n\n                <h2 class="section-title center" style="margin-top: 60px;">Education</h2>\n                <div class="timeline">\n                    $2`);

fs.writeFileSync('index.html', html);
console.log('HTML updated.');

// 2. Update styles.css for mobile image and hover effects
let css = fs.readFileSync('styles.css', 'utf8');

// Fix mobile hero image hiding
css = css.replace('.hero-image-placeholder { display: none; }', `
        .hero-image-placeholder {
            position: relative;
            right: auto;
            bottom: auto;
            width: 200px;
            height: 230px;
            margin: 40px auto 0 auto;
        }
`);

// Add subtle hover effects
css += `
/* Refinement Hover Effects */
.featured-project, .cert-item, .skill-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.featured-project:hover, .cert-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
.skill-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
`;

// Make sure body font is very readable
css = css.replace("font-family: 'Inter', sans-serif;", "font-family: 'Inter', system-ui, -apple-system, sans-serif; letter-spacing: -0.01em;");

fs.writeFileSync('styles.css', css);
console.log('CSS updated.');

