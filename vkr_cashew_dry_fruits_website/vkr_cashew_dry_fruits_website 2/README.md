# VKR Cashew & Dry Fruits — Official Website

> **Premium Quality • Naturally Delicious • 50 Years of Trust (Since 1976)**

A production-ready, high-performance website implementing the complete **Stitch UI/UX design** for **VKR Cashew & Dry Fruits** with clean, modular, reusable architecture.

---

## 🏛️ Business Profile

- **Brand:** VKR Cashew & Dry Fruits
- **Tagline:** Premium Quality • Naturally Delicious
- **Heritage:** 50 Years of Trust & Quality (1976 – 2026)
- **Primary Line:** 8838885921
- **Secondary Line:** 9345020801
- **Email:** [vkrcashews@gmail.com](mailto:vkrcashews@gmail.com)
- **Retail Branch:** 26, Daily Bazaar, Block-19, Neyveli, Cuddalore
- **Manufacturing / Processing Hub:** VKR Agencies, VeerasinganKuppam, Panruti, Cuddalore – 607805

---

## 📦 Products Catalog

### Cashews (Panruti Processing)
- **W180** — King of Cashews (160–180 nuts/lb)
- **W240** — Jumbo Select (220–240 nuts/lb)
- **W320** — Global Benchmark / Popular Grade (300–320 nuts/lb)
- **W400** — Compact Economy Whole (380–400 nuts/lb)
- **Splits (JH)** — Halved Kernels for Cooking & Sweets
- **WSP** — White Small Pieces for Gravies, Bakeries & Industrial Use

### Dry Fruits (Gourmet Selection)
- **Almonds (Badam)** — Premium California Non-GMO
- **Walnuts (Akhrot)** — Hand-Cracked Kashmiri Extra Light Halves
- **Athi Palam** — Brown Organic Sun-Dried Figs
- **Dates (Khajoor)** — Arabian & Medjool Naturally Cured
- **Raisins (Kismis)** — Golden Sun-Dried Grapes
- **Black Raisins** — Dark Therapeutic Antioxidant-Rich
- **Pista (Pistachios)** — In-Shell Slow-Roasted & Lightly Salted
- **Foxnuts (Makhana)** — Jumbo 5-Soota Popped Lotus Seeds

---

## ⚡ Tech Stack & Clean Architecture

Built with modern React and clean reusable components to ensure a lean, fast, and easily maintainable codebase:

```
├── index.html                   # Entry HTML with fonts and SEO meta tags
├── vite.config.js               # Vite build configuration
├── tailwind.config.js           # Full Stitch Heritage Royal Dry Fruits palette & typography
├── postcss.config.js            # PostCSS configuration
├── Code.gs                      # Single Google Apps Script handler for form submissions
├── .env.example                 # Environment variable template
└── src/
    ├── main.jsx                 # Application entry point with BrowserRouter
    ├── App.jsx                  # Main layout, routing, and scroll-to-top
    ├── data/
    │   └── products.js          # Central single source of truth for products, search & contacts
    ├── styles/
    │   └── index.css            # Tailwind directives, fonts, and custom utilities
    ├── components/
    │   ├── Navbar.jsx           # Fixed header, mobile drawer, instant search overlay
    │   ├── Footer.jsx           # Commemorative footer with branch addresses & grade links
    │   ├── ProductCard.jsx      # Reusable product card with responsive hover effects
    │   ├── EnquiryModal.jsx     # Interactive "Get Best Price" modal with quantity tiers
    │   └── WhatsAppFab.jsx      # Floating action button for WhatsApp enquiry
    └── pages/
        ├── HomePage.jsx         # Hero, 50-yr timeline, dual pillars, featured products
        ├── AboutPage.jsx        # 50-year legacy narrative, core values, operational flow
        ├── CashewsPage.jsx      # Cashew catalog, grade filter, sizing guide
        ├── DryFruitsPage.jsx    # Dry fruit catalog, tree nut & dried fruit category tabs
        ├── WholesalePage.jsx    # B2B bulk supply desk & 9-field quotation form
        ├── ContactPage.jsx      # Fast action desk, 5-field enquiry form, branch map links
        └── ProductDetailsPage.jsx # Dynamic route (/products/:slug) for all 14 products
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Add your deployed Google Apps Script Web App URL:
```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The output will be in the `dist/` directory, ready to be hosted on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

---

## 📊 Google Sheets Setup

All forms on the website (**Contact**, **Wholesale**, and **Get Best Price**) submit directly to Google Sheets using a single Google Apps Script endpoint. No Node.js or Python server required.

### Column Headers
Create a new Google Sheet and add these exact headers in Row 1:
1. `Timestamp`
2. `Form Type`
3. `Name`
4. `Business Name`
5. `Phone`
6. `Email`
7. `Location`
8. `Product`
9. `Category`
10. `Quantity`
11. `Subject`
12. `Message`
13. `Source`

### Deploying the Apps Script
1. In your Google Sheet, go to **Extensions** → **Apps Script**.
2. Delete any boilerplate code and paste the complete contents of `Code.gs`.
3. Click **Deploy** → **New deployment**.
4. Click the gear icon next to "Select type" and choose **Web app**.
5. Configure the deployment settings:
   - **Description:** `VKR Cashew & Dry Fruits Forms Web App`
   - **Execute as:** `Me (your email)`
   - **Who has access:** `Anyone` *(required for frontend submissions without OAuth)*
6. Click **Deploy**.
7. Authorize access when prompted.
8. Copy the **Web App URL** (ends in `/exec`).
9. Paste it into your `.env` file:
   ```env
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
   ```
10. Restart your development server (`npm run dev`) or rebuild.

---

## 📱 Interactive Communication Features

- **WhatsApp Enquiry:**
  - Floating WhatsApp button with quick chat prompt
  - Product-specific dynamic pre-filled messages:
    `Hello VKR Cashew & Dry Fruits, I am interested in [PRODUCT NAME]. Please share the best price and available quantities.`
- **Direct Phone Links:** One-touch dialing to `8838885921` and `9345020801`.
- **Email:** Direct mailto links to `vkrcashews@gmail.com`.
- **Physical Map Links:** Direct Google Maps queries for both Neyveli and Panruti locations.

---

## 📄 License

© 2026 VKR Cashew & Dry Fruits. All rights reserved.
