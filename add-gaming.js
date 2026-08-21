const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Change grid to 5 columns
html = html.replace('<div class="skills-grid" style="grid-template-columns: repeat(4, 1fr);">', '<div class="skills-grid" style="grid-template-columns: repeat(5, 1fr);">');

const gamingCard = `                      <div class="skill-card">\n                          <i class="fas fa-gamepad skill-icon" style="color: var(--accent-color);"></i>\n                          <p>Gaming</p>\n                      </div>\n                  </div>`;

html = html.replace('                  </div>\n              </section>\n              \n              <!-- Achievements Section -->', gamingCard + '\n              </section>\n              \n              <!-- Achievements Section -->');
html = html.replace('                  </div>\r\n              </section>\r\n              \r\n              <!-- Achievements Section -->', gamingCard + '\r\n              </section>\r\n              \r\n              <!-- Achievements Section -->');

fs.writeFileSync('index.html', html);
console.log('Added Gaming');
