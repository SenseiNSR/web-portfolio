// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Generation & Logic
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

const follower = document.createElement('div');
follower.classList.add('cursor-follower');
document.body.appendChild(follower);

gsap.set(cursor, {xPercent: -50, yPercent: -50});
gsap.set(follower, {xPercent: -50, yPercent: -50});

let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out'
    });
    
    gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: 'power4.out'
    });
});

// Add hover effects to all interactive elements
const interactiveElements = document.querySelectorAll('a, button, .btn, .skill-card, .portfolio-item');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        follower.classList.add('active');
        gsap.to(follower, {
            scale: 1.5,
            backgroundColor: 'rgba(223, 179, 100, 0.2)',
            duration: 0.3
        });
    });
    el.addEventListener('mouseleave', () => {
        follower.classList.remove('active');
        gsap.to(follower, {
            scale: 1,
            backgroundColor: 'transparent',
            duration: 0.3
        });
    });
});



// Hero Animation
const heroTimeline = gsap.timeline();

heroTimeline.from('.hero-intro', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.2
})
.from('.hero-name', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.5')
.from('.hero-role', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.5')
.from('.hero .contact-btn', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.5')
.from('.hero-socials a', {
    x: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
}, '-=0.5');

// Scroll Animations
// Section Titles
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// About Section
gsap.from('.about-content p', {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%'
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

// Skills and Hobbies Sections
gsap.utils.toArray('.skills-grid').forEach(grid => {
    gsap.from(grid.querySelectorAll('.skill-card'), {
        scrollTrigger: {
            trigger: grid,
            start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        onComplete: function() {
            gsap.set(grid.querySelectorAll('.skill-card'), {clearProps: "transform"});
        }
    });
});

// Portfolio Section
gsap.from('.portfolio-item', {
    scrollTrigger: {
        trigger: '.portfolio-grid',
        start: 'top 80%'
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'power3.out'
});

// Timeline Sections
gsap.utils.toArray('.timeline').forEach(timeline => {
    gsap.from(timeline.querySelectorAll('.timeline-item'), {
        scrollTrigger: {
            trigger: timeline,
            start: 'top 80%'
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out'
    });
});

// Testimonial Section
gsap.from('.testimonial-content', {
    scrollTrigger: {
        trigger: '.testimonial-container',
        start: 'top 80%'
    },
    x: -30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.testimonial-image', {
    scrollTrigger: {
        trigger: '.testimonial-container',
        start: 'top 80%'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.5)'
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        const targetSection = document.querySelector(targetId);
        
        if(targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Project Details Toggle
const viewMoreBtn = document.getElementById('view-more-btn');
const projectDetails = document.getElementById('project-details');

if (viewMoreBtn && projectDetails) {
    viewMoreBtn.addEventListener('click', () => {
        if (projectDetails.classList.contains('hidden')) {
            projectDetails.classList.remove('hidden');
            gsap.fromTo(projectDetails, 
                { height: 0, opacity: 0 }, 
                { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
            );
            viewMoreBtn.textContent = 'View Less';
            setTimeout(() => ScrollTrigger.refresh(), 500);
        } else {
            gsap.to(projectDetails, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    projectDetails.classList.add('hidden');
                    ScrollTrigger.refresh();
                }
            });
            viewMoreBtn.textContent = 'View More';
        }
    });
}

// Contact Form Handlers
function getFormData() {
    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const message = document.getElementById('senderMessage').value.trim();
    
    if(!name || !email || !message) {
        alert('Please fill all the fields before sending.');
        return null;
    }
    return { name, email, message };
}

function sendWhatsApp() {
    const data = getFormData();
    if(!data) return;
    
    const text = encodeURIComponent(`Hi Nahar!\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    const url = `https://wa.me/918269016285?text=${text}`;
    window.open(url, '_blank');
}

function sendEmail() {
    const data = getFormData();
    if(!data) return;
    
    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(`Hi Nahar,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    const url = `mailto:naharsinghranas@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = url;
}

// Project Modal Logic
const projectData = {
    'gesturex': {
        title: 'GESTUREX - Real-time Sign Language ML',
        text: 'Developed a real-time system to bridge communication gaps for hearing and speech impaired individuals. Used Python, OpenCV, and PyTorch to translate sign language gestures into text or speech. Implemented dynamic hand gesture recognition with high accuracy and low latency. Enhanced accessibility and inclusive communication through innovative technology.',
        link: '#'
    },
    'library': {
        title: 'Library Management System',
        text: 'Developed a web-based Library Management System using ASP.NET Core MVC and Microsoft SQL Server. Implemented book catalogue, student/librarian records, borrowing/returns, and publication management. Designed a responsive admin dashboard with authentication, search, statistics, quick actions, and dark mode. Centralized records to reduce paperwork and enable secure, efficient resource tracking.',
        link: 'https://github.com/SenseiNSR/Library_Management-MPOnline'
    },
    'retail': {
        title: 'Smart Retail AI',
        text: 'Completed an AI/ML Internship in Smart Retail, gaining hands-on experience in Python, data preprocessing, EDA, and feature engineering. Built and evaluated ML models using Regression, Classification, Decision Trees, Random Forest, SVM, and hyperparameter tuning. Worked with Clustering, PCA, Neural Networks, TensorFlow/PyTorch, Computer Vision, and Natural Language Processing. Developed and deployed ML pipelines using Flask/FastAPI, with Git/GitHub, model versioning, and capstone project experience.',
        link: 'https://github.com/SenseiNSR/smart_retail'
    },
    'it': {
        title: 'IT & Networking',
        text: 'General experience and projects covering modern IT infrastructure and Networking protocols.',
        link: '#'
    }
};

function openModal(id, event) {
    event.preventDefault();
    document.getElementById('modal-title').innerText = projectData[id].title;
    document.getElementById('modal-text').innerText = projectData[id].text;
    const linkBtn = document.getElementById('modal-link');
    
    if(projectData[id].link !== '#') {
        linkBtn.href = projectData[id].link;
        linkBtn.style.display = 'inline-block';
    } else {
        linkBtn.style.display = 'none';
    }
    
    document.getElementById('project-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        closeModal();
    }
}
