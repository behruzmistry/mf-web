document.addEventListener("DOMContentLoaded", () => {
    // Media Tabs Logic
    const mediaTabs = document.querySelectorAll(".media-tab");
    const mediaDisplays = document.querySelectorAll(".media-display");

    function showMedia(mediaType) {
        mediaDisplays.forEach(display => {
            display.classList.remove("active");
            if (display.id === `media-${mediaType}`) {
                display.classList.add("active");
            }
        });
        mediaTabs.forEach(tab => {
            tab.classList.remove("active");
            if (tab.dataset.media === mediaType) {
                tab.classList.add("active");
            }
        });
    }

    if (mediaTabs.length > 0 && mediaDisplays.length > 0) {
        mediaTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                showMedia(tab.dataset.media);
            });
        });
        // Initial media display (e.g., first tab)
        showMedia(mediaTabs[0].dataset.media);
    }

    // Photo Modal Logic
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("modalCaption");
    const photoItems = document.querySelectorAll(".photo-item img"); 
    const span = document.getElementById("closePhotoModal");

    if (modal && modalImg && captionText && photoItems.length > 0 && span) {
        photoItems.forEach(item => {
            item.addEventListener("click", function(){
                modal.style.display = "flex";
                modalImg.src = this.dataset.full || this.src; // Use data-full for full image if available
                captionText.innerHTML = this.alt;
            });
        });

        span.onclick = function() { 
            modal.style.display = "none";
        }
        
        modal.onclick = function(event) { // Close if clicked on background
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    // Newsletter Form Submission (Placeholder)
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector("input[name='email']");
            if (emailInput) {
                const email = emailInput.value;
                console.log("Newsletter Subscription:", email);
                alert("Thank you for subscribing to our newsletter!");
                newsletterForm.reset();
            }
        });
    }
});
