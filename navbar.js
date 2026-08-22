const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

const oldNav = `.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
}`;

const newNav = `.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(39, 40, 43, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    margin: 0 -5%; /* Pull out of padding if necessary */
    padding: 20px 5%;
}`;

// Because it's inside portfolio-container which has padding, making it sticky might be weird if not full width.
// Wait, .portfolio-container has `max-width: 1200px; margin: 0 auto; padding: 0 5%;`
// Let's just make it sticky inside the container.
const newNavBetter = `.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(39, 40, 43, 0.85);
    backdrop-filter: blur(10px);
}`;

css = css.replace(oldNav, newNavBetter);
fs.writeFileSync('styles.css', css);
console.log('Navbar updated');
