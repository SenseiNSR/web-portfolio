const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace('.portfolio-grid { grid-template-columns: 1fr; }', '.portfolio-grid { grid-template-columns: 1fr; }\r\n    .cert-list { grid-template-columns: 1fr; }');

fs.writeFileSync('styles.css', css);
