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
.from('.contact-btn', {
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

// Skills Section
gsap.from('.skill-card', {
    scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 80%'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
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

// Timeline / Experience Section
gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top 80%'
    },
    x: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'power2.out'
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
    
    const text = encodeURIComponent(Hi Nahar!\n\nName: \nEmail: \n\nMessage:\n);
    const url = https://wa.me/918269016285?text=;
    window.open(url, '_blank');
}

function sendEmail() {
    const data = getFormData();
    if(!data) return;
    
    const subject = encodeURIComponent(Portfolio Contact from );
    const body = encodeURIComponent(Hi Nahar,\n\nName: \nEmail: \n\nMessage:\n);
    const url = mailto:naharsinghranas@gmail.com?subject=&body=;
    window.location.href = url;
}
