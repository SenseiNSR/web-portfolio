const fs = require('fs');
let js = fs.readFileSync('script.js', 'utf8');

// We will replace the old Scroll Animations block with new immersive ones.
const oldScrollRegex = /\/\/ Scroll Animations[\s\S]*?\/\/ Smooth Scroll for Nav Links/;

const newScrollAnimations = `// Immersive Scroll Animations
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

// Smooth Scroll for Nav Links`;

js = js.replace(oldScrollRegex, newScrollAnimations);
fs.writeFileSync('script.js', js);
console.log('JS animations updated.');
