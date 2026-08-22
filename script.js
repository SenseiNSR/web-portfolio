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


const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
// Immersive Scroll Animations

gsap.registerPlugin(ScrollTrigger);

// Hero Parallax
gsap.to('.hero-content', {
    y: 150,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Section Titles Reveal
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        rotationX: -20,
        transformOrigin: "0% 50%",
        duration: 1,
        ease: 'power3.out'
    });
});

// Featured Project Immersive Reveal
const featuredImg = document.querySelector('.featured-img');
if(featuredImg) {
    gsap.fromTo(featuredImg, 
        { scale: 0.9, opacity: 0, filter: 'blur(10px)' },
        { 
            scale: 1, opacity: 1, filter: 'blur(0px)', 
            duration: 1.5, ease: 'power3.out',
            scrollTrigger: {
                trigger: '.featured-project',
                start: 'top 85%'
            }
        }
    );
    // Subtle parallax on the image inside
    gsap.to(featuredImg.querySelector('i'), {
        y: 50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.featured-project',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// Other Projects Asymmetrical Reveal
gsap.utils.toArray('.portfolio-item').forEach((item, i) => {
    const isEven = i % 2 === 0;
    const img = item.querySelector('.portfolio-img');
    const info = item.querySelector('.portfolio-info');
    
    gsap.fromTo(img, 
        { x: isEven ? -50 : 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 85%' } }
    );
    
    gsap.fromTo(info, 
        { x: isEven ? 50 : -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: item, start: 'top 85%' } }
    );
    
    // Parallax on image content
    if(img.querySelector('i')) {
        gsap.to(img.querySelector('i'), {
            y: 40,
            ease: 'none',
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }
});

// Skills Stagger
gsap.utils.toArray('.skills-category').forEach(cat => {
    gsap.from(cat.querySelectorAll('.skill-card'), {
        scrollTrigger: {
            trigger: cat,
            start: 'top 90%'
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
    });
});

// Timeline Reveal
gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 90%'
        },
        x: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Certifications Reveal
gsap.from('.cert-item', {
    scrollTrigger: {
        trigger: '.cert-list',
        start: 'top 90%'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
});


} // end reduced motion check
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



// Subtle 3D Tilt Effect
document.querySelectorAll('.featured-project, .portfolio-item').forEach(card => {
    card.addEventListener('mousemove', e => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth <= 768) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3; // Subtle 3 deg max
        const rotateY = ((x - centerX) / centerX) * 3;
        
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        card.style.transition = 'none';
        card.style.boxShadow = `${-rotateY}px ${rotateX}px 25px rgba(0,0,0,0.3)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.4s ease-out, box-shadow 0.4s ease-out';
        card.style.boxShadow = '';
    });
});
