document.addEventListener("DOMContentLoaded", () => {
    // Merch Tabs Logic
    const merchTabs = document.querySelectorAll(".merch-tab");
    const productCards = document.querySelectorAll(".products-grid .product-card");
    const allProductsDisplay = document.getElementById("merch-all");

    function filterProducts(category) {
        productCards.forEach(card => {
            const cardCategories = card.dataset.category ? card.dataset.category.split(" ") : [];
            if (category === "all" || cardCategories.includes(category)) {
                card.style.display = "flex"; 
            } else {
                card.style.display = "none";
            }
        });
    }

    if (merchTabs.length > 0 && productCards.length > 0) {
        merchTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                merchTabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                const filterCategory = tab.dataset.merch;
                filterProducts(filterCategory);
                if (allProductsDisplay) allProductsDisplay.classList.add("active"); 
            });
        });
        // Initial product display
        if (merchTabs[0]) filterProducts(merchTabs[0].dataset.merch);
    }

    // Product Options (Size & Color, Quantity) & Add to Cart
    document.querySelectorAll(".product-card").forEach(card => {
        const sizeOptions = card.querySelectorAll(".size-option");
        sizeOptions.forEach(option => {
            option.addEventListener("click", () => {
                sizeOptions.forEach(opt => opt.classList.remove("active"));
                option.classList.add("active");
            });
        });

        const colorOptionLabels = card.querySelectorAll(".color-option-label");
        colorOptionLabels.forEach(label => {
            label.addEventListener("click", () => {
                colorOptionLabels.forEach(lbl => lbl.classList.remove("active"));
                label.classList.add("active");
                const selectedColorRadio = card.querySelector('input[name^="color-"]:checked'); // Correctly get the checked radio
                const selectedColor = selectedColorRadio ? selectedColorRadio.value : null; // Get its value
                const productImage = card.querySelector('.product-image');
                
                // Ensure card.dataset.baseImageName is defined on the product-card element in HTML
                // e.g., <div class="product-card" data-base-image-name="mf_classic_tee" data-category="apparel">
                if (productImage && card.dataset.baseImageName && selectedColor) { 
                     productImage.src = `images/merch/${card.dataset.baseImageName}_${selectedColor}.jpg`;
                     // console.log(`Attempting to change image to: images/merch/${card.dataset.baseImageName}_${selectedColor}.jpg`);
                } else if (productImage && card.dataset.baseImageName && !selectedColor && label.classList.contains('color-black')) {
                    // Default to black if no specific color is checked but black is clicked (example)
                    // productImage.src = `images/merch/${card.dataset.baseImageName}_black.jpg`;
                }
            });
        });

        const quantityInput = card.querySelector(".quantity-input");
        const minusBtn = card.querySelector(".quantity-btn.minus");
        const plusBtn = card.querySelector(".quantity-btn.plus");

        if (quantityInput && minusBtn && plusBtn) {
            minusBtn.addEventListener("click", () => {
                let currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                }
            });
            plusBtn.addEventListener("click", () => {
                let currentValue = parseInt(quantityInput.value);
                quantityInput.value = currentValue + 1; 
            });
        }

        const addToCartBtn = card.querySelector(".add-to-cart-btn");
        if (addToCartBtn) {
            addToCartBtn.addEventListener("click", () => {
                const productName = card.querySelector(".product-title").textContent;
                const quantity = quantityInput ? quantityInput.value : 1;
                const selectedSizeEl = card.querySelector(".size-option.active");
                const selectedSize = selectedSizeEl ? selectedSizeEl.dataset.value : 'N/A';
                const selectedColorRadio = card.querySelector('input[name^="color-"]:checked');
                const selectedColor = selectedColorRadio ? selectedColorRadio.value : 'N/A';
                
                console.log(`Added to cart: ${quantity} x ${productName}, Size: ${selectedSize}, Color: ${selectedColor}`);
                alert(`${quantity} x ${productName} (Size: ${selectedSize}, Color: ${selectedColor}) added to cart! (Feature in development)`);
            });
        }
    });

    // "View Rework Collection" button functionality
    const viewReworkBtn = document.getElementById("viewReworkCollectionBtn");
    if (viewReworkBtn) {
        viewReworkBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const limitedTab = document.querySelector(".merch-tab[data-merch='limited']");
            if (limitedTab) {
                limitedTab.click();
                const merchSection = document.querySelector(".merch-section");
                if (merchSection) {
                    merchSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    }
});
