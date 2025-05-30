document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll (basic example)
    const animatedElements = document.querySelectorAll(".event-card"); // Add other elements to animate
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = "running";
                    // observer.unobserve(entry.target); // Optional: stop observing after animation
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
});
