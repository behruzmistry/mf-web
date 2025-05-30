document.addEventListener('DOMContentLoaded', () => {
    // Swiper for event-slider
    const eventSwiper = new Swiper('.event-slider', {
        slidesPerView: 1.17,
        spaceBetween: 24,
        centeredSlides: false,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            700: { slidesPerView: 2.2, spaceBetween: 28 },
            1000: { slidesPerView: 3, spaceBetween: 36 },
            1300: { slidesPerView: 4, spaceBetween: 42 }
        }
    });

    // Popups logic 
    // OPEN popup and prefill event name
    document.querySelectorAll('.guestlist-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const guestlistPopup = document.getElementById('guestlist-popup');
            if (guestlistPopup) {
                guestlistPopup.classList.add('active');
                const eventNameInput = document.getElementById('guestlist-event-name');
                if (eventNameInput) eventNameInput.value = btn.getAttribute('data-event-name') || '';
                
                // Update popup title (optional, if you want to also set it from JS)
                // const popupTitle = guestlistPopup.querySelector('.popup-title');
                // if (popupTitle) popupTitle.textContent = `Get on the Guestlist: ${btn.getAttribute('data-event-name') || 'Selected Event'}`;
            }
        });
    });

    document.querySelectorAll('.table-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tablePopup = document.getElementById('table-popup');
            if (tablePopup) {
                tablePopup.classList.add('active');
                const eventNameInput = document.getElementById('table-event-name');
                if (eventNameInput) eventNameInput.value = btn.getAttribute('data-event-name') || '';

                // Update popup title (optional)
                // const popupTitle = tablePopup.querySelector('.popup-title');
                // if (popupTitle) popupTitle.textContent = `Book a Table: ${btn.getAttribute('data-event-name') || 'Selected Event'}`;
            }
        });
    });

    // CLOSE popups
    document.querySelectorAll('.popup-close').forEach(close => {
        close.addEventListener('click', function() {
            const popup = this.closest('.popup');
            if (popup) {
                popup.classList.remove('active');
                const form = popup.querySelector('form');
                if (form) form.style.display = ''; // Reset form visibility
                const confirmation = popup.querySelector('.confirmation-message');
                if (confirmation) confirmation.style.display = 'none'; // Hide confirmation
            }
        });
    });

    // Hide popup if click outside modal
    window.addEventListener('click', function(e){
        document.querySelectorAll('.popup.active').forEach(popup => { // Only target active popups
            if (e.target === popup) { // Check if the click is on the popup backdrop itself
                popup.classList.remove('active');
                const form = popup.querySelector('form');
                if (form) form.style.display = ''; // Reset form visibility
                const confirmation = popup.querySelector('.confirmation-message');
                if (confirmation) confirmation.style.display = 'none'; // Hide confirmation
            }
        });
    });
    
    // Handle guestlist form submission
    const guestlistForm = document.getElementById('guestlist-form');
    if (guestlistForm) {
        guestlistForm.addEventListener('submit', function(e){
            e.preventDefault();
            this.style.display = 'none';
            const confirmation = document.getElementById('guestlist-confirmation');
            if (confirmation) confirmation.style.display = 'block'; 
            // Add actual form submission logic here if/when backend is ready
        });
    }

    // Handle table form submission
    const tableForm = document.getElementById('table-form');
    if (tableForm) {
        tableForm.addEventListener('submit', function(e){
            e.preventDefault();
            this.style.display = 'none';
            const confirmation = document.getElementById('table-confirmation');
            if (confirmation) confirmation.style.display = 'block';
            // Add actual form submission logic here if/when backend is ready
        });
    }
});
