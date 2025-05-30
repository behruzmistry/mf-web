# mixed feelings - Creative Collective Website

This repository contains the source code for the official website of "mixed feelings," a multidisciplinary creative entity focused on sound, storytelling, and cultural engineering. The website showcases their events, media content, merchandise, and creative services.

## Features

*   **Homepage:** Introduces the collective with an "About" section and previews upcoming events.
*   **Events Showcase:** Displays detailed information about past and upcoming events, including dates, venues, and performing artists.
    *   Interactive event slider/carousel.
    *   Functionality for users to book tables or get on guestlists via pop-up forms.
*   **Media Hub:** A dedicated section for multimedia content.
    *   DJ Mixes with embedded audio players.
    *   Video gallery with embedded video players.
    *   Podcast episodes with embedded audio players.
    *   Photo galleries with modal image viewer.
    *   Newsletter subscription form.
*   **Merchandise Shop:** An e-commerce section for branded merchandise.
    *   Categorized product listings (e.g., All, Apparel, Accessories, Limited Edition).
    *   Product pages with image galleries, price, description, and options (size, color).
    *   Quantity selectors and "Add to Cart" functionality (front-end representation).
*   **Creative Services Display:** Outlines the range of creative services offered by "mixed feelings," such as talent booking, event production, and content marketing.
*   **Responsive Design:** The website is designed to be accessible and user-friendly across various devices, including desktops, tablets, and mobile phones.
*   **Interactive Elements:** Utilizes JavaScript for dynamic content like header scroll effects, hamburger menu navigation, tabbed interfaces for media and merch, and animated background effects.

## Pages

The website consists of the following main pages:

*   **`index.html`**: The main landing page. It provides an introduction to "mixed feelings," showcases featured content like upcoming events, and includes an "About Us" section.
*   **`events.html`**: Dedicated to past and upcoming events. Features an interactive slider for events and pop-up forms for table bookings and guestlist sign-ups.
*   **`media.html`**: Serves as a hub for multimedia content. It includes tabbed sections for DJ mixes, videos, podcasts, and photo galleries. Also contains a newsletter subscription form.
*   **`merch.html`**: The online shop for "mixed feelings" merchandise. Products are displayed with details, options (size, color), and a mock "Add to Cart" functionality. Includes category tabs.
*   **`services.html`**: Outlines the creative services offered, such as talent booking, event production, content marketing, and PR. Includes a call-to-action to contact for collaborations.

## Technologies Used

*   **HTML5:** For the basic structure and content of the web pages.
*   **CSS3:** For styling the website, including:
    *   Custom CSS properties (variables) for theming.
    *   Flexbox and Grid for layout.
    *   Responsive design techniques (media queries).
    *   Animations and transitions for visual effects.
*   **JavaScript (ES6+):** For client-side interactivity, including:
    *   DOM manipulation for dynamic content updates.
    *   Event handling for user interactions (clicks, scrolls, form submissions).
    *   Header scroll effects, mobile navigation (hamburger menu), tabbed interfaces, image modals, and product option selectors.
*   **SwiperJS:** Used on the `events.html` page for the interactive event slider. (Mentioned as it's a significant external library found in `events.html`)
*   **Font Awesome:** Used for icons throughout the website. (Referenced in the `<head>` of HTML files)

## Project Structure

The project files are organized as follows:

```
├── css/
│   ├── styles.css             # Main stylesheet for index.html and general styling
│   └── events-styles.css      # Specific styles for events.html (if significantly different or additional)
├── images/
│   ├── events/                # Images related to events
│   ├── home/                  # Images for the homepage
│   ├── media/                 # Images for the media page (covers, gallery)
│   ├── merch/                 # Product images for the merchandise page
│   ├── services/              # Images for the services page
│   └── noise.png              # Background noise texture
├── js/
│   ├── main.js                # General JavaScript for common interactions (e.g., header, nav)
│   ├── events.js              # Specific JavaScript for events.html (e.g., Swiper, popups)
│   ├── dynamic.js             # Likely handles dynamic content loading or effects
│   └── effects.js             # Could be for specific visual effects like background animations
├── logos/                     # Various versions of the "mixed feelings" and related event logos
├── index.html                 # Homepage
├── events.html                # Events page
├── media.html                 # Media page (mixes, videos, podcasts, photos)
├── merch.html                 # Merchandise page
├── services.html              # Creative services page
└── README.md                  # This file
```

## Setup and Usage

This is a static HTML, CSS, and JavaScript website. No special setup or build process is required.

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd <repository-directory>
    ```
3.  **Open `index.html` in your web browser:**
    You can do this by double-clicking the `index.html` file in your file explorer, or by navigating to the file path in your browser (e.g., `file:///path/to/your/project/index.html`).

    For the best experience, especially if there are any features that rely on specific browser APIs that are restricted for `file:///` URLs (though not immediately apparent in this project), you can serve the files using a simple local web server. Most modern code editors (like VS Code with the "Live Server" extension) or Python's built-in HTTP server can be used:

    Using Python 3:
    ```bash
    python -m http.server
    ```
    Then open `http://localhost:8000` (or the port indicated) in your browser.

## Contributing

Contributions to this project are welcome! If you have suggestions for improvements or find any issues, please feel free to:

1.  Open an issue to discuss the changes.
2.  Fork the repository and create a new branch for your feature or bug fix.
3.  Submit a pull request with a clear description of your changes.

Please ensure your code adheres to the existing style and that the website remains functional and visually consistent.

## License

The content and code of this website are proprietary to "mixed feelings" unless otherwise stated. For inquiries about usage or licensing, please contact connect@mixedfeelingscreative.com.

(Consider adding a standard open-source license like MIT if parts of the code are intended to be shared more broadly in the future.)
