const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const headEnd = '</head>';
const newMeta = `
    <meta name="description" content="Portfolio of Nahar Singh Rana, a Computer Science Engineer building AI-powered software. Experienced in Python, Computer Vision, and full-stack development.">
    <meta property="og:title" content="Nahar Singh Rana | Software Engineer">
    <meta property="og:description" content="Computer Science Engineer building AI-powered software. Explore my projects and experience.">
    <meta property="og:type" content="website">
    <meta name="theme-color" content="#27282b">
</head>`;

html = html.replace(headEnd, newMeta);
fs.writeFileSync('index.html', html);
console.log('SEO metadata added.');
