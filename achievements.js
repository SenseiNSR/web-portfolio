const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace hero image
html = html.replace('<i class="fas fa-user-astronaut"></i>', '<img src="profile.jpg" alt="Profile" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">');

// Add achievements section after Hobbies
const achievementsHTML = `
            <!-- Achievements Section -->
            <section class="section achievements-section">
                <h2 class="section-title center">Achievements</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content" style="width: 100%;">
                            <h3>Karate & Martial Arts</h3>
                            <p class="timeline-text">
                                • Black Belt (1st Dan) in Karate<br>
                                • Represented Madhya Pradesh in Karate in Nationals with Multiple Medals<br>
                                • MMA (State level - Gold)<br>
                                • Muay Thai (State Level - Gold)
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content" style="width: 100%;">
                            <h3>Music</h3>
                            <p class="timeline-text">
                                • Studied Keyboard from Trinity College London Branch in India for 3 years
                            </p>
                        </div>
                    </div>
                </div>
            </section>
`;

html = html.replace('<!-- Contact Section -->', achievementsHTML + '\n            <!-- Contact Section -->');

fs.writeFileSync('index.html', html);
console.log('Successfully added photo and achievements.');
