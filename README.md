# Kichuma Structures

A modern, high-impact static website for a Kenyan adventure and construction company specializing in zipline installation, high-ropes design, sky cycling, giant swings, and structural cabling solutions.

This project showcases the company’s services, completed projects, booking flow, and contact details in a visually engaging, single-page website experience.

## Overview

Kichuma Structures is a business website designed to:

- Present the company’s core service offerings
- Showcase completed adventure projects and installations
- Provide a smooth booking experience for prospective clients
- Share contact information and social media links
- Deliver a professional and memorable brand identity

The site is built as a front-end web application using HTML, CSS, and JavaScript, with no complex framework or backend required for the main experience.

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla ES6+)
- Google Fonts
- Font Awesome Icons
- YouTube embeds for project/media previews
- Python script (`kichuma.py`) for lightweight project scripting support

## Features

- Responsive single-page navigation
- Hero section with strong branding and visual design
- Service cards and detailed service pages
- Project gallery with modal detail popups
- Contact section with email, phone, and address information
- Social media links
- Booking flow with multi-step form logic
- OTP/email verification simulation for service booking
- Scrollable service showcase with arrow navigation

## Project Structure

```text
kichuma-structures/
├── index.html          # Main website HTML file
├── styles.css          # Styling for the entire site
├── script.js           # Interaction logic, navigation, projects, booking flow
├── kichuma.py          # Small Python utility script
├── README.md           # Project documentation
├── assets/
│   └── images/         # Site imagery and branding assets
└── .gitignore          # Optional ignore rules if present in your setup
```

## Pages and Sections

The website includes the following sections:

- Home
- Services
- Projects
- Contact
- Booking

The site is designed as a multi-section landing page with dynamic page switching handled in JavaScript.

## How to Run

Since this is a static website, you can run it in either of these ways:

### Option 1: Open directly in a browser

- Open `index.html` directly in your browser.

This works for most static content, though some browsers may behave slightly differently when loading local assets.

### Option 2: Run a local web server

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

This is the recommended approach for a smoother preview experience.

## Booking Flow

The booking experience is implemented in the front end and includes:

1. Email entry
2. OTP generation and verification flow
3. Booking form steps
4. Completed confirmation state

This allows users to book adventure, inspection, maintenance, or construction services through a simple guided interface.

## Services Offered

The business promotes the following offerings:

- Zipline Construction
- Zipline Inspection
- Zipline Maintenance
- High Rope Design & Construction
- Sky Cycling
- Giant Swing Construction
- Structural Cabling Design & Installation

## Project Highlights

The website includes featured project entries such as:

- The Dam Redhill
- Naiposha Gardens
- The Big 5 Lounge
- La Cascadas Miguela Sports Garden
- Stephanos, Gatundu
- Twin Rivers, Tigoni
- Tenwek Falls
- The Kentmere Club

Each project includes location information and descriptive details, making the site feel like a portfolio and service brochure in one.

## Contact Information

The website includes:

- Email: `allankichuma21@gmail.com`
- Phone: `+254 796 537 159`
- Address: `P.O Box 345, Nairobi, Kenya`
- Social media links including TikTok, X (Twitter), Facebook, and YouTube

## Customization Points

You can easily update the following:

- Company branding and text content
- Services and project descriptions
- Contact information
- Images and media assets
- Social links
- Booking copy and form labels

Files most relevant for customization:

- `index.html` — page structure and content
- `styles.css` — site theme, layout, and colors
- `script.js` — project data, page navigation, and booking logic
- `assets/images/` — project and service imagery

## Browser Compatibility

This project is designed for modern browsers, including:

- Chrome
- Edge
- Firefox
- Safari

## Notes

- This is a front-end marketing and booking website, not a full backend application.
- The booking validation is browser-side and is suitable for demonstration or prototype use.
- The project uses static assets and embeds rather than a framework build pipeline.

## Future Improvements

Possible future enhancements include:

- Real backend form handling and database storage
- Email delivery integration for booking requests
- Admin dashboard for project management
- CMS or content management system integration
- Mobile app or React conversion
- Analytics and lead tracking

## License

This project is for personal or business website use. Add a license if you plan to distribute or reuse it publicly.

## Author

Kichuma Structures

## Contributing

This repository is currently a static website project. Contributions are welcome if you want to improve:

- Design polish
- Responsiveness
- Accessibility
- Performance
- Booking functionality

## Quick Start Summary

```bash
cd kichuma-structures
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

Built for Kichuma Structures — adventure infrastructure, construction, and customer engagement.
