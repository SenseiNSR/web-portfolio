const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update portfolio items to have onclick
html = html.replace('<a href="#" class="portfolio-item">', '<a href="#" class="portfolio-item" onclick="openModal(\'gesturex\', event)">');
html = html.replace('<a href="https://github.com/SenseiNSR/Library_Management-MPOnline" target="_blank" class="portfolio-item">', '<a href="#" class="portfolio-item" onclick="openModal(\'library\', event)">');
html = html.replace('<a href="https://github.com/SenseiNSR/smart_retail" target="_blank" class="portfolio-item">', '<a href="#" class="portfolio-item" onclick="openModal(\'retail\', event)">');
// there is a 4th one IT & Networking
html = html.replace('<a href="#" class="portfolio-item">\r\n                        <div class="portfolio-img bg-4">', '<a href="#" class="portfolio-item" onclick="openModal(\'it\', event)">\r\n                        <div class="portfolio-img bg-4">');

// Remove view-more-btn and project-details
const regexToRemove = /<div class="center" style="margin-top: 30px;">\s*<button id="view-more-btn"[\s\S]*?<\/div>\s*<\/section>/;

const modalHTML = `
                <!-- Project Modal -->
                <div id="project-modal" class="modal">
                    <div class="modal-content">
                        <span class="close-btn" onclick="closeModal()">&times;</span>
                        <h3 id="modal-title">Project Title</h3>
                        <p id="modal-text">Project description goes here.</p>
                        <a id="modal-link" href="#" target="_blank" class="btn outline-btn" style="margin-top: 20px; display: inline-block;">View on GitHub</a>
                    </div>
                </div>
            </section>
`;

html = html.replace(regexToRemove, modalHTML);
fs.writeFileSync('index.html', html);
console.log('HTML updated.');
