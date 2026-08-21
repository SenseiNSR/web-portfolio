const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const projectData = {
    'gesturex': {
        title: 'GESTUREX (Sign Language ML)',
        text: 'Developed a real-time system to bridge communication gaps for hearing and speech impaired individuals. Used Python, OpenCV, and PyTorch to translate sign language gestures into text or speech. Implemented dynamic hand gesture recognition with high accuracy and low latency.',
        link: '#'
    },
    'library': {
        title: 'Library Management System',
        text: 'Developed a web-based Library Management System using ASP.NET Core MVC and Microsoft SQL Server. Implemented book catalogue, student/librarian records, borrowing/returns, and publication management. Designed a responsive admin dashboard with authentication, search, statistics, quick actions, and dark mode.',
        link: 'https://github.com/SenseiNSR/Library_Management-MPOnline'
    },
    'retail': {
        title: 'Smart Retail AI',
        text: 'Completed an AI/ML Internship in Smart Retail, gaining hands-on experience in Python, data preprocessing, EDA, and feature engineering. Built and evaluated ML models using Regression, Classification, Decision Trees, Random Forest, SVM, and hyperparameter tuning.',
        link: 'https://github.com/SenseiNSR/smart_retail'
    },
    'it': {
        title: 'IT & Networking',
        text: 'General experience and projects covering modern IT infrastructure and Networking protocols.',
        link: '#'
    }
};

function buildItem(id, icon, bgClass) {
    const p = projectData[id];
    const linkHTML = p.link !== '#' ? `<a href="${p.link}" target="_blank" class="btn outline-btn" style="margin-top: 15px; font-size: 12px; padding: 8px 15px;">View Project</a>` : '';
    
    return `<div class="portfolio-item" onclick="this.classList.toggle('expanded')">
                        <div class="portfolio-img ${bgClass}">
                            <i class="${icon}"></i>
                        </div>
                        <div class="portfolio-info">
                            <div class="portfolio-title">${p.title}</div>
                            <div class="portfolio-dropdown">
                                <p style="margin-top: 15px; font-size: 14px; color: var(--text-secondary); line-height: 1.5; text-align: left;">${p.text}</p>
                                ${linkHTML}
                            </div>
                        </div>
                    </div>`;
}

const newGrid = `                <div class="portfolio-grid">
                    ${buildItem('gesturex', 'fas fa-sign-language', 'bg-1')}
                    ${buildItem('library', 'fas fa-book-open', 'bg-2')}
                    ${buildItem('retail', 'fas fa-shopping-cart', 'bg-3')}
                    ${buildItem('it', 'fas fa-network-wired', 'bg-4')}
                </div>`;

const gridRegex = /<div class="portfolio-grid">[\s\S]*?<\/div>\s*<!-- Project Modal -->/;
html = html.replace(gridRegex, newGrid + '\n                <!-- Project Modal -->');

// Remove modal HTML completely
const modalRegex = /<!-- Project Modal -->[\s\S]*?<\/div>\s*<\/div>/;
html = html.replace(modalRegex, '');

fs.writeFileSync('index.html', html);
console.log('Updated portfolio HTML for dropdowns.');
