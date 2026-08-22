const fs = require('fs');

// 1. UPDATE HTML
let html = fs.readFileSync('index.html', 'utf8');

// Fix GESTUREX claims
html = html.replace('with high accuracy and low latency.', '.');

// Fix MPOnline Internship claims
const oldInternship = `Hands-on internship focusing on real-world applications of AI/ML and advanced software engineering. Developed skills in model training, AI applications, modern software engineering practices, lifecycle management, and scalable development.`;
const newInternship = `Completed an internship focusing on AI/ML applications and advanced software engineering. Gained practical exposure to modern software development practices.`;
html = html.replace(oldInternship, newInternship);

// Remove Class 10/12 from Education
const dpsRegex = /<!-- Item 2 -->[\s\S]*?<!-- Item 3 -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
html = html.replace(dpsRegex, '</div>');

fs.writeFileSync('index.html', html);


// 2. UPDATE CSS
let css = fs.readFileSync('styles.css', 'utf8');

// Buttons Depth
css += `
/* Subtle 3D Buttons */
.btn {
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}
.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
.btn:active {
    transform: translateY(1px);
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

/* Hero Depth */
.hero {
    position: relative;
}
.hero::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(223, 179, 100, 0.03) 0%, transparent 70%);
    z-index: 1;
    pointer-events: none;
}
`;

// Compact Certifications
const oldCerts = `.cert-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 30px;
}

.cert-item {
    position: relative;
    padding-left: 55px;
}

.cert-item .about-line {
    top: 10px;
    left: 0;
    width: 30px;
}

.cert-item h4 {
    color: var(--accent-color);
    margin-bottom: 10px;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
}`;

const newCerts = `.cert-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.cert-item {
    background: var(--card-bg);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.cert-item .about-line {
    display: none;
}

.cert-item h4 {
    color: var(--accent-color);
    margin-bottom: 8px;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}`;
css = css.replace(oldCerts, newCerts);

fs.writeFileSync('styles.css', css);


// 3. UPDATE JS (Add 3D Tilt)
let js = fs.readFileSync('script.js', 'utf8');

const tiltJS = `
// Subtle 3D Tilt Effect
document.querySelectorAll('.featured-project, .portfolio-item').forEach(card => {
    card.addEventListener('mousemove', e => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth <= 768) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3; // Subtle 3 deg max
        const rotateY = ((x - centerX) / centerX) * 3;
        
        card.style.transform = \`perspective(1200px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.01, 1.01, 1.01)\`;
        card.style.transition = 'none';
        card.style.boxShadow = \`\${-rotateY}px \${rotateX}px 25px rgba(0,0,0,0.3)\`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.4s ease-out, box-shadow 0.4s ease-out';
        card.style.boxShadow = '';
    });
});
`;

js += tiltJS;
fs.writeFileSync('script.js', js);
console.log('All updates applied successfully.');
