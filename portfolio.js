const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldPortfolioRegex = /<section id="portfolio" class="section portfolio-section">[\s\S]*?<\/section>/;

const newPortfolio = `<section id="portfolio" class="section portfolio-section">
                <h2 class="section-title center">Featured Projects</h2>
                
                <!-- Featured GESTUREX -->
                <div class="featured-project">
                    <div class="featured-img bg-1">
                        <i class="fas fa-sign-language"></i>
                    </div>
                    <div class="featured-info">
                        <h3>GESTUREX (Sign Language ML)</h3>
                        <div class="tech-tags">
                            <span>Python</span>
                            <span>OpenCV</span>
                            <span>PyTorch</span>
                            <span>Computer Vision</span>
                        </div>
                        <p>Developed a real-time system to bridge communication gaps for hearing and speech impaired individuals. Translates sign language gestures into text or speech using dynamic hand gesture recognition with high accuracy and low latency.</p>
                    </div>
                </div>

                <div class="portfolio-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="portfolio-item" >
                        <div class="portfolio-img bg-2">
                            <i class="fas fa-book-open"></i>
                        </div>
                        <div class="portfolio-info">
                            <div class="portfolio-title">Library Management System</div>
                            <div class="portfolio-dropdown">
                                <p style="margin-top: 15px; font-size: 14px; color: var(--text-secondary); line-height: 1.5; text-align: left;">Developed a web-based Library Management System using ASP.NET Core MVC and Microsoft SQL Server. Implemented book catalogue, student/librarian records, borrowing/returns, and publication management. Designed a responsive admin dashboard with authentication, search, statistics, quick actions, and dark mode.</p>
                                <a href="https://github.com/SenseiNSR/Library_Management-MPOnline" target="_blank" class="btn outline-btn" style="margin-top: 15px; font-size: 12px; padding: 8px 15px;">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item" >
                        <div class="portfolio-img bg-3">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <div class="portfolio-info">
                            <div class="portfolio-title">Smart Retail AI</div>
                            <div class="portfolio-dropdown">
                                <p style="margin-top: 15px; font-size: 14px; color: var(--text-secondary); line-height: 1.5; text-align: left;">Completed an AI/ML Internship in Smart Retail, gaining hands-on experience in Python, data preprocessing, EDA, and feature engineering. Built and evaluated ML models using Regression, Classification, Decision Trees, Random Forest, SVM, and hyperparameter tuning.</p>
                                <a href="https://github.com/SenseiNSR/smart_retail" target="_blank" class="btn outline-btn" style="margin-top: 15px; font-size: 12px; padding: 8px 15px;">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

html = html.replace(oldPortfolioRegex, newPortfolio);
fs.writeFileSync('index.html', html);
console.log('Portfolio updated');
