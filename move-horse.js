const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove Horse Riding from achievements
html = html.replace('• Muay Thai (State Level - Gold)<br>\r\n                                • Horse Riding', '• Muay Thai (State Level - Gold)');
// Also try without \r\n just in case
html = html.replace('• Muay Thai (State Level - Gold)<br>\n                                • Horse Riding', '• Muay Thai (State Level - Gold)');

// 2. Add Horse Riding to Hobbies and change grid-template-columns to 4
html = html.replace('<div class="skills-grid" style="grid-template-columns: repeat(3, 1fr);">', '<div class="skills-grid" style="grid-template-columns: repeat(4, 1fr);">');

const newHobby = `                    <div class="skill-card">
                        <i class="fas fa-horse skill-icon" style="color: var(--accent-color);"></i>
                        <p>Horse Riding</p>
                    </div>
                </div>
            </section>`;

html = html.replace('                </div>\r\n            </section>', newHobby);
html = html.replace('                </div>\n            </section>', newHobby);

fs.writeFileSync('index.html', html);
console.log('Moved Horse Riding to Hobbies');
