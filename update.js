const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const eduRegex = /(<!-- Education \/ Experience Section -->[\s\S]*?)(?=<!-- Testimonial \(Certifications\) -->)/;
const certRegex = /(<!-- Testimonial \(Certifications\) -->[\s\S]*?)(?=<!-- Contact Section -->)/;

const eduMatch = html.match(eduRegex);
const certMatch = html.match(certRegex);

if (eduMatch && certMatch) {
    let newHtml = html.replace(eduRegex, '');
    newHtml = newHtml.replace(certMatch[0], certMatch[0] + '\n' + eduMatch[0]);
    
    const hobbiesHTML = `
            <!-- Hobbies Section -->
            <section class="section hobbies-section">
                <h2 class="section-title center">Hobbies</h2>
                <div class="skills-grid" style="grid-template-columns: repeat(3, 1fr);">
                    <div class="skill-card">
                        <i class="fas fa-biking skill-icon" style="color: var(--accent-color);"></i>
                        <p>Biking</p>
                    </div>
                    <div class="skill-card">
                        <i class="fas fa-headphones skill-icon" style="color: var(--accent-color);"></i>
                        <p>Listening to Music</p>
                    </div>
                    <div class="skill-card">
                        <i class="fas fa-plane skill-icon" style="color: var(--accent-color);"></i>
                        <p>Travelling</p>
                    </div>
                </div>
            </section>
`;
    newHtml = newHtml.replace('<!-- Contact Section -->', hobbiesHTML + '            <!-- Contact Section -->');
    
    fs.writeFileSync('index.html', newHtml);
    console.log('Successfully swapped and added hobbies.');
} else {
    console.log('Failed to match sections.');
}
