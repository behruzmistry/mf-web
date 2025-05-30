// Additional JavaScript for dynamic effects on Mixed Feelings Website

// Parallax Effect for Hero Section
function setupParallax() {
    const heroSection = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image img');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroSection && heroImage) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const translateY = scrollPosition * 0.3;
            
            // Parallax effect for hero image
            heroImage.style.transform = `scale(1.05) translateY(${translateY}px)`;
            
            // Fade effect for hero content
            if (heroContent) {
                heroContent.style.opacity = 1 - (scrollPosition * 0.003);
            }
        });
    }
}

// Animated Counter for Statistics
function setupCounters() {
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length) {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const step = Math.ceil(target / (duration / 20)); // Update every 20ms
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current >= target) {
                    counter.textContent = target;
                } else {
                    counter.textContent = current;
                    setTimeout(updateCounter, 20);
                }
            };
            
            // Start counter when element is in viewport
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    updateCounter();
                    observer.disconnect();
                }
            });
            
            observer.observe(counter);
        });
    }
}

// Typing Effect for Hero Title
function setupTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle && heroTitle.getAttribute('data-typing') === 'true') {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
}

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Calls to setupParallax, setupCounters, setupTypingEffect
    // should be made from specific pages if needed, not globally here.
    // For example, a page could do:
    // if (typeof setupParallax === 'function') setupParallax();
});
