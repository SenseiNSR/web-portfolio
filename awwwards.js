const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// 1. Typography Hierarchy & Hero Parallax
const awwwardsCSS = `
/* Awwwards Style Typography & Layout */
.hero-name {
    font-size: clamp(3rem, 8vw, 8rem) !important;
    line-height: 1.1 !important;
    letter-spacing: -0.04em !important;
    margin-bottom: 20px !important;
    background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.hero-role {
    font-size: clamp(1.2rem, 2vw, 1.8rem) !important;
    max-width: 600px;
    margin-bottom: 40px !important;
}
.hero-content {
    z-index: 2;
}
.hero {
    min-height: 90vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}

/* Featured Project Awwwards Style */
.featured-project {
    flex-direction: column !important;
    border: none !important;
    background: transparent !important;
    box-shadow: none !important;
    margin-bottom: 80px !important;
}
.featured-img {
    width: 100%;
    height: 60vh !important;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    transform-origin: center center;
}
.featured-img i {
    font-size: 120px !important;
    opacity: 0.5;
}
.featured-info {
    padding: 40px 0 !important;
    max-width: 800px;
}
.featured-info h3 {
    font-size: clamp(2rem, 5vw, 4rem) !important;
    letter-spacing: -0.03em;
    margin-bottom: 20px !important;
}

/* Other Projects Awwwards Style */
.portfolio-grid {
    display: flex !important;
    flex-direction: column;
    gap: 100px;
}
.portfolio-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;
    background: transparent !important;
}
.portfolio-item:nth-child(even) {
    flex-direction: row-reverse;
}
.portfolio-img {
    flex: 1;
    height: 400px !important;
    border-radius: 20px;
    overflow: hidden;
}
.portfolio-info {
    flex: 1;
    padding: 0 !important;
}
.portfolio-dropdown {
    max-height: none !important;
    opacity: 1 !important;
    position: relative !important;
    background: transparent !important;
    padding: 0 !important;
    box-shadow: none !important;
    pointer-events: auto !important;
    margin-top: 20px;
}
.portfolio-title {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    letter-spacing: -0.02em;
    color: var(--text-primary) !important;
}

@media (max-width: 768px) {
    .portfolio-item, .portfolio-item:nth-child(even) {
        flex-direction: column;
        gap: 30px;
    }
    .featured-img {
        height: 40vh !important;
    }
    .portfolio-img {
        height: 300px !important;
        width: 100%;
    }
}
`;

css += awwwardsCSS;
fs.writeFileSync('styles.css', css);
console.log('CSS updated for Awwwards style.');
