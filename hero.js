const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldHero = `<p class="hero-intro">I'M <span class="hero-name">Nahar Singh Rana</span></p>
                    <h2 class="hero-role">Computer Science Student &<br>AI-ML Enthusiast</h2>
                    <a href="nsr_resume_updated.docx" class="btn contact-btn" download>Download Resume</a>`;

const newHero = `<h1 class="hero-name" style="font-size: 3rem; font-weight: 700; margin-bottom: 10px;">Nahar Singh Rana</h1>
                    <h2 class="hero-role" style="font-size: 1.8rem; font-weight: 400; color: var(--text-secondary); margin-bottom: 30px;">Computer Science Engineer building AI-powered software.</h2>
                    <div style="display: flex; gap: 15px;">
                        <a href="#portfolio" class="btn fill-btn">View Projects</a>
                        <a href="nsr_resume_updated.docx" class="btn outline-btn" download>Download Resume</a>
                    </div>`;

// Because the spacing might differ, I will use regex
const regex = /<p class="hero-intro">I'M <span class="hero-name">Nahar Singh Rana<\/span><\/p>\s*<h2 class="hero-role">Computer Science Student &<br>AI-ML Enthusiast<\/h2>\s*<a href="nsr_resume_updated\.docx" class="btn contact-btn" download>Download Resume<\/a>/;

html = html.replace(regex, newHero);
fs.writeFileSync('index.html', html);
console.log('Hero section updated');
