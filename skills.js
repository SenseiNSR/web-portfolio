const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldSkillsRegex = /<section class="section skills-section">[\s\S]*?<\/section>/;

const newSkills = `<section class="section skills-section" id="skills">
                <h2 class="section-title center">Technical Skills</h2>
                <div class="skills-category-container">
                    <div class="skills-category">
                        <h3>Languages & Web</h3>
                        <div class="skills-grid" style="grid-template-columns: repeat(2, 1fr);">
                            <div class="skill-card">
                                <i class="fab fa-python skill-icon" style="color: #3776AB;"></i>
                                <p>Python</p>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-java skill-icon" style="color: #f89820;"></i>
                                <p>Java</p>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-react skill-icon" style="color: #61DAFB;"></i>
                                <p>React.js</p>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-html5 skill-icon" style="color: #E34F26;"></i>
                                <p>HTML/CSS</p>
                            </div>
                        </div>
                    </div>
                    <div class="skills-category">
                        <h3>AI & Data</h3>
                        <div class="skills-grid" style="grid-template-columns: repeat(2, 1fr);">
                            <div class="skill-card">
                                <i class="fas fa-brain skill-icon" style="color: #fff;"></i>
                                <p>AI / ML</p>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-eye skill-icon" style="color: #7A7A7A;"></i>
                                <p>OpenCV</p>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-database skill-icon" style="color: #47A248;"></i>
                                <p>SQL Server</p>
                            </div>
                        </div>
                    </div>
                    <div class="skills-category">
                        <h3>Tools & Infra</h3>
                        <div class="skills-grid" style="grid-template-columns: repeat(2, 1fr);">
                            <div class="skill-card">
                                <i class="fab fa-git-alt skill-icon" style="color: #F05032;"></i>
                                <p>Git/GitHub</p>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-network-wired skill-icon" style="color: var(--accent-color);"></i>
                                <p>Networking</p>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-tools skill-icon" style="color: #ccc;"></i>
                                <p>Troubleshooting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

html = html.replace(oldSkillsRegex, newSkills);
fs.writeFileSync('index.html', html);
console.log('Skills updated');
