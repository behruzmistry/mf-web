// JavaScript for dynamic form functionality and micro-animations
document.addEventListener('DOMContentLoaded', function() {
    // Form popup functionality
    const setupFormPopups = () => {
        // Get all buttons that should trigger popups
        const guestlistBtns = document.querySelectorAll('.guestlist-btn');
        const tableBtns = document.querySelectorAll('.table-btn');
        
        // Popup containers are expected to be in the HTML of the respective pages (e.g., events.html)
        const guestlistPopup = document.getElementById('guestlist-popup');
        const tablePopup = document.getElementById('table-popup');
        
        // Add click handlers to buttons
        guestlistBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                if (guestlistPopup) {
                    const eventName = this.getAttribute('data-event-name');
                    const eventNameField = guestlistPopup.querySelector('#guestlist-event-name');
                    const popupTitle = guestlistPopup.querySelector('.popup-title');

                    if (eventNameField) eventNameField.value = eventName || '';
                    if (popupTitle) popupTitle.textContent = `Get on the Guestlist: ${eventName || 'Selected Event'}`;
                    
                    guestlistPopup.classList.add('active');
                }
            });
        });
        
        tableBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                if (tablePopup) {
                    const eventName = this.getAttribute('data-event-name');
                    const eventNameField = tablePopup.querySelector('#table-event-name');
                     const popupTitle = tablePopup.querySelector('.popup-title');

                    if (eventNameField) eventNameField.value = eventName || '';
                    if (popupTitle) popupTitle.textContent = `Book a Table: ${eventName || 'Selected Event'}`;

                    tablePopup.classList.add('active');
                }
            });
        });
        
        // Add close functionality to popups
        const closeButtons = document.querySelectorAll('.popup-close');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const popup = this.closest('.popup');
                if (popup) {
                    popup.classList.remove('active');
                    const form = popup.querySelector('form');
                    const confirmation = popup.querySelector('.confirmation-message');
                    if (form) form.style.display = 'block'; // Reset form visibility
                    if (confirmation) confirmation.style.display = 'none'; // Hide confirmation
                }
            });
        });
        
        // Close popup when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target.classList.contains('popup')) {
                e.target.classList.remove('active');
                const form = e.target.querySelector('form');
                const confirmation = e.target.querySelector('.confirmation-message');
                if (form) form.style.display = 'block'; // Reset form visibility
                if (confirmation) confirmation.style.display = 'none'; // Hide confirmation
            }
        });
    };
    
    // Form submission handling
    function setupFormSubmission() {
        const guestlistForm = document.getElementById('guestlist-form');
        const tableForm = document.getElementById('table-form');
        
        if (guestlistForm) {
            guestlistForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const confirmationMessage = document.getElementById('guestlist-confirmation');
                // Simulate submission
                this.style.display = 'none';
                if(confirmationMessage) confirmationMessage.style.display = 'block';
                
                setTimeout(() => {
                    this.reset();
                    // this.style.display = 'block'; // Keep form hidden after submission example
                    // if(confirmationMessage) confirmationMessage.style.display = 'none';
                    // if(this.closest('.popup')) this.closest('.popup').classList.remove('active');
                }, 3000); // Keep confirmation for 3s
            });
        }
        
        if (tableForm) {
            tableForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const confirmationMessage = document.getElementById('table-confirmation');
                // Simulate submission
                this.style.display = 'none';
                if(confirmationMessage) confirmationMessage.style.display = 'block';

                setTimeout(() => {
                    this.reset();
                    // this.style.display = 'block';
                    // if(confirmationMessage) confirmationMessage.style.display = 'none';
                    // if(this.closest('.popup')) this.closest('.popup').classList.remove('active');
                }, 3000);
            });
        }
    }
    
    // Add micro-animations for components, buttons, and transitions
    function setupMicroAnimations() {
        // Add hover effects to buttons (general buttons, not specific card buttons which might have own effects)
        const buttons = document.querySelectorAll('button:not(.quantity-btn):not(.no-hover-effect), .service-cta-button, .cta-button-main, .view-collection-btn, .newsletter-button'); // Example: exclude quantity buttons
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                // Ensure not to override complex existing hover effects from CSS if not desired
                if (!this.classList.contains('no-js-hover')) { 
                    this.style.transform = 'scale(1.03)'; // Slightly less than 1.05 to differentiate
                    this.style.transition = 'transform 0.2s ease-out';
                }
            });
            
            btn.addEventListener('mouseleave', function() {
                 if (!this.classList.contains('no-js-hover')) {
                    this.style.transform = 'scale(1)';
                }
            });
        });
        
        // Add fade-in animation to elements with class 'fade-in-on-load'
        const fadeElements = document.querySelectorAll('.fade-in-on-load');
        fadeElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(15px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            el.style.transitionDelay = `${index * 0.1}s`;
            
            setTimeout(() => { // Ensure this runs after any other style initializations
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 50); // Small delay to ensure transition applies
        });
    }
    
    // Initialize these features if the relevant elements are on the page
    // These functions are defined to be callable, but will only execute fully if their target selectors are found.
    // This approach is better than conditionally including script tags on each page.
    if (document.querySelector('.guestlist-btn') || document.querySelector('.table-btn')) {
        setupFormPopups();
        setupFormSubmission();
    }
    setupMicroAnimations(); // General micro-animations can be called on all pages
});
