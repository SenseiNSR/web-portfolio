const fs = require('fs');
let js = fs.readFileSync('script.js', 'utf8');

// Disable scroll animations if reduced motion
const wrapperStart = `
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
// Immersive Scroll Animations
`;
const wrapperEnd = `
} // end reduced motion check
// Smooth Scroll for Nav Links
`;

js = js.replace('// Immersive Scroll Animations', wrapperStart);
js = js.replace('// Smooth Scroll for Nav Links', wrapperEnd);
fs.writeFileSync('script.js', js);
console.log('Reduced motion check added to GSAP.');
