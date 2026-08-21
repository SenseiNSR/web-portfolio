const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove from About section
const horseCard = `                    <div class="skill-card">\r\n                        <i class="fas fa-horse skill-icon" style="color: var(--accent-color);"></i>\r\n                        <p>Horse Riding</p>\r\n                    </div>\r\n`;
html = html.replace(horseCard, '');
html = html.replace(`                    <div class="skill-card">\n                        <i class="fas fa-horse skill-icon" style="color: var(--accent-color);"></i>\n                        <p>Horse Riding</p>\n                    </div>\n`, '');

// 2. Append to Hobbies section
const hobbiesTarget = `<p>Travelling</p>\r\n                    </div>\r\n                </div>\r\n            </section>`;
const hobbiesTarget2 = `<p>Travelling</p>\n                    </div>\n                </div>\n            </section>`;

const newHobbies = `<p>Travelling</p>
                    </div>
                    <div class="skill-card">
                        <i class="fas fa-horse skill-icon" style="color: var(--accent-color);"></i>
                        <p>Horse Riding</p>
                    </div>
                </div>
            </section>`;

if (html.includes(hobbiesTarget)) {
    html = html.replace(hobbiesTarget, newHobbies);
} else if (html.includes(hobbiesTarget2)) {
    html = html.replace(hobbiesTarget2, newHobbies);
} else {
    // try a more generic replacement
    html = html.replace(/<p>Travelling<\/p>[\s]*<\/div>[\s]*<\/div>[\s]*<\/section>/, newHobbies);
}

fs.writeFileSync('index.html', html);
console.log('Fixed Horse Riding placement.');
