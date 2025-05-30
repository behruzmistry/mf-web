document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const headerElement = document.querySelector("header");
    if (headerElement) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                headerElement.classList.add("scrolled");
            } else {
                headerElement.classList.remove("scrolled");
            }
        });
    }

    // Hamburger menu toggle (for #hamburger-menu and #nav-menu)
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }
    
    // Hamburger menu toggle (for #menuToggle and #navMenu, used on media.html, merch.html, services.html)
    const menuToggle = document.getElementById("menuToggle");
    // navMenu is already selected above, or re-select if it could be different for some pages
    const navMenuForToggle = document.getElementById("navMenu") || document.getElementById("nav-menu"); 

    if (menuToggle && navMenuForToggle) {
        menuToggle.addEventListener("click", () => {
            navMenuForToggle.classList.toggle("active");
            const icon = menuToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-times");
            }
        });
    }

    // Smooth Scroll for Navigation Links
    function setupSmoothScroll() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId.length > 1 && document.querySelector(targetId)) { // Ensure it's not just "#" and target exists
                    e.preventDefault();
                    document.querySelector(targetId).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Optional: Close mobile menu if open
                    // Consolidate menu elements selection
                    const anyNavMenu = document.getElementById("nav-menu") || document.getElementById("navMenu");
                    const anyHamburger = document.getElementById("hamburger-menu") || document.getElementById("menuToggle");
                    
                    if (anyNavMenu && anyNavMenu.classList.contains('active')) {
                        anyNavMenu.classList.remove('active');
                        if(anyHamburger && anyHamburger.classList.contains('active')){
                            anyHamburger.classList.remove('active');
                             // Specific handling for #menuToggle which has an icon inside
                            if (anyHamburger.id === "menuToggle") {
                                const icon = anyHamburger.querySelector("i");
                                if (icon && icon.classList.contains("fa-times")) {
                                    icon.classList.remove("fa-times");
                                    icon.classList.add("fa-bars");
                                }
                            }
                        }
                    }
                }
            });
        });
    }
    setupSmoothScroll();

    // Audio Player Customization (Pause others when one plays)
    function setupAudioPlayers() {
        const audioPlayers = document.querySelectorAll('audio');
        audioPlayers.forEach(player => {
            player.addEventListener('play', () => {
                audioPlayers.forEach(otherPlayer => {
                    if (otherPlayer !== player && !otherPlayer.paused) {
                        otherPlayer.pause();
                    }
                });
            });
        });
    }
    setupAudioPlayers();
});
