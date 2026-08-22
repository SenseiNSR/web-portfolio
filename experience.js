const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldTimeline = `<h2 class="section-title center">Education</h2>
                <div class="timeline">
                    <!-- Item 1 -->
                    <div class="timeline-item">
                        <div class="timeline-year">2027</div>
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>VIT Bhopal</h3>
                            <p class="timeline-subtitle">B. Tech in Computer Science and Engineering</p>
                            <p class="timeline-text">
                                Expected Graduation: 2027. Building a strong foundation in data structures, algorithms, and problem-solving. Proficient in multiple programming languages and web technologies.
                            </p>
                        </div>
                    </div>`;

const newTimeline = `<h2 class="section-title center">Experience & Education</h2>
                <div class="timeline">
                    <!-- Internship -->
                    <div class="timeline-item">
                        <div class="timeline-year">2024</div>
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>MPOnline Limited</h3>
                            <p class="timeline-subtitle">Software Engineering & AI/ML Intern</p>
                            <p class="timeline-text">
                                Hands-on internship focusing on real-world applications of AI/ML and advanced software engineering. Developed skills in model training, AI applications, modern software engineering practices, lifecycle management, and scalable development.
                            </p>
                        </div>
                    </div>
                    <!-- Item 1 -->
                    <div class="timeline-item">
                        <div class="timeline-year">2027</div>
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>VIT Bhopal</h3>
                            <p class="timeline-subtitle">B. Tech in Computer Science and Engineering</p>
                            <p class="timeline-text">
                                Expected Graduation: 2027. Building a strong foundation in data structures, algorithms, and problem-solving. Proficient in multiple programming languages and web technologies.
                            </p>
                        </div>
                    </div>`;

// Because formatting might be different, let's use a looser regex
const regex = /<h2 class="section-title center">Education<\/h2>[\s\S]*?<div class="timeline">[\s\S]*?<!-- Item 1 -->[\s\S]*?<div class="timeline-item">[\s\S]*?<div class="timeline-year">2027<\/div>[\s\S]*?<div class="timeline-dot"><\/div>[\s\S]*?<div class="timeline-content">[\s\S]*?<h3>VIT Bhopal<\/h3>[\s\S]*?<p class="timeline-subtitle">B\. Tech in Computer Science and Engineering<\/p>[\s\S]*?<p class="timeline-text">[\s\S]*?Expected Graduation: 2027\. Building a strong foundation in data structures, algorithms, and problem-solving\. Proficient in multiple programming languages and web technologies\.[\s\S]*?<\/p>[\s\S]*?<\/div>[\s\S]*?<\/div>/;

html = html.replace(regex, newTimeline);
fs.writeFileSync('index.html', html);
console.log('Experience updated');
