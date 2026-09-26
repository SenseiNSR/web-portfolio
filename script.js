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




// Athenaeum Expansion Logic
document.addEventListener('DOMContentLoaded', () => {
    const athenaeumCard = document.querySelector('.athenaeum-card');
    if (athenaeumCard) {
        // Expand card when clicked
        athenaeumCard.addEventListener('click', function(e) {
            // Prevent expansion if clicking inside the expanded details already, 
            // unless they click the expand-indicator itself.
            if (e.target.closest('.athenaeum-details') && !e.target.closest('.collapse-indicator') && !e.target.closest('.gallery-item')) {
                return;
            }
            if (e.target.closest('a')) return;
            
            if (!this.classList.contains('expanded')) {
                this.classList.add('expanded');
                this.setAttribute('aria-expanded', 'true');
            }
        });

        // Keyboard accessibility for expansion
        athenaeumCard.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                if (!this.classList.contains('expanded')) {
                    e.preventDefault();
                    this.classList.add('expanded');
                    this.setAttribute('aria-expanded', 'true');
                }
            }
        });

        // Collapse card
        const collapseBtn = document.querySelector('.collapse-indicator');
        if (collapseBtn) {
            collapseBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                athenaeumCard.classList.remove('expanded');
                athenaeumCard.setAttribute('aria-expanded', 'false');
                athenaeumCard.focus();
                
                // Scroll back to the card smoothly
                setTimeout(() => {
                    athenaeumCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            });
            
            collapseBtn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    athenaeumCard.classList.remove('expanded');
                    athenaeumCard.setAttribute('aria-expanded', 'false');
                    athenaeumCard.focus();
                }
            });
        }
    }

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const counter = document.querySelector('.lightbox-counter');
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    
    let currentIndex = 0;

    function openLightbox(index) {
        if (galleryItems.length === 0) return;
        currentIndex = index;
        const src = galleryItems[currentIndex].getAttribute('data-src');
        lightboxImg.src = src;
        counter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
        
        // Handle single image case
        if (galleryItems.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
        
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        closeBtn.focus();
        document.body.style.overflow = 'hidden'; // prevent scrolling
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (galleryItems[currentIndex]) galleryItems[currentIndex].focus();
    }

    function nextImage() {
        if (galleryItems.length <= 1) return;
        currentIndex = (currentIndex + 1) % galleryItems.length;
        openLightbox(currentIndex);
    }

    function prevImage() {
        if (galleryItems.length <= 1) return;
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        openLightbox(currentIndex);
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(index);
        });
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                openLightbox(index);
            }
        });
    });

    if (lightbox) {
        closeBtn.addEventListener('click', closeLightbox);
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        });
    }
});


// Universal click-to-expand for portfolio items
document.addEventListener('DOMContentLoaded', () => {
    const expandableItems = document.querySelectorAll('.click-expandable');
    expandableItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.closest('.portfolio-dropdown') && !e.target.closest('.collapse-indicator')) {
                return;
            }
            if (e.target.closest('a')) return;
            
            if (!this.classList.contains('expanded')) {
                this.classList.add('expanded');
                this.setAttribute('aria-expanded', 'true');
            }
        });

        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                if (!this.classList.contains('expanded')) {
                    e.preventDefault();
                    this.classList.add('expanded');
                    this.setAttribute('aria-expanded', 'true');
                }
            }
        });

        const collapseBtn = item.querySelector('.collapse-indicator');
        if (collapseBtn) {
            collapseBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                item.classList.remove('expanded');
                item.setAttribute('aria-expanded', 'false');
                item.focus();
                
                setTimeout(() => {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            });
            
            collapseBtn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    item.classList.remove('expanded');
                    item.setAttribute('aria-expanded', 'false');
                    item.focus();
                }
            });
        }
    });
});
