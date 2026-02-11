# SS Security Services Website - Complete Structure

## 🎯 Website Overview

A professional security services website with dark theme toggle, smooth animations, and multiple dedicated pages for services, about us, and contact information.

---

## 📱 Pages & Routes

### 1. **Home Page** (`/`)
- **Features:**
  - Hero section with animated background blobs and background image
  - Quick overview of services with image cards
  - Weapons display section
  - Why Choose Us section with stats
  - Contact section
  - Footer with links

### 2. **Services Page** (`/services`)
- **Banner:** Video banner with service title and subtitle
- **Content:**
  - Detailed service cards with images (left-right alternating layout)
  - 3 main services with their features:
    1. Personal Bodyguards
    2. Professional Bouncers
    3. Protocol Guards
  - Each service includes:
    - Feature list with checkmark icons
    - Call-to-action buttons
    - Professional images
  - Custom solutions CTA section

### 3. **About Us Page** (`/about`)
- **Banner:** Custom about banner image
- **Content:**
  - Company history and mission
  - Stats section (500+ personnel, 15+ years, 1000+ clients, 24/7 available)
  - Core values (4 sections)
  - Team member cards with images
  - Professional experience highlights

### 4. **Contact Us Page** (`/contact`)
- **Banner:** Security-focused banner image
- **Content:**
  - Contact information cards (phone, email, address, hours)
  - Contact form with fields:
    - Full name
    - Email
    - Phone
    - Service selection dropdown
    - Message textarea
  - Quick contact section with direct call/email links
  - FAQ section
  - Success message after form submission

---

## 🎨 Design Features

### Color Scheme
- **Primary:** Fresh Green (#22c55e with 120° HSL)
- **Background:** Dark black (0 0% 8%)
- **Cards:** Dark gray with transparency (0 0% 12%)
- **Text:** Light colors (0 0% 95%)
- **Light Mode:** White background with dark text

### Components

1. **Navbar** (`components/navbar.tsx`)
   - Blurred glass-morphism effect
   - Logo with link to home
   - Navigation links to all pages
   - Dark/Light theme toggle
   - Mobile responsive menu
   - Smooth hover effects

2. **Video Banner** (`components/video-banner.tsx`)
   - Full-width banner with background image
   - Dark overlay
   - Centered title and subtitle
   - Animated green gradient accent at bottom

3. **Hero** (`components/hero.tsx`)
   - Animated blob background
   - Background image with overlay
   - Main heading with green accent
   - Description card
   - CTA buttons
   - Scroll indicator

4. **Services** (`components/services.tsx`)
   - 3 service cards with images
   - Image hover zoom effect
   - Quick access to detailed services page

5. **Weapons** (`components/weapons.tsx`)
   - Displays security equipment/weapons
   - Card-based layout

6. **Why Choose Us** (`components/why-choose-us.tsx`)
   - Company benefits and reasons
   - Stats and highlights

7. **Contact** (`components/contact.tsx`)
   - Quick contact information
   - Contact form

8. **Footer** (`components/footer.tsx`)
   - Links and company information
   - Contact details

---

## 🖼️ Images Used

All images are professionally generated and placed in `/public/`:

1. **ss-logo.png** - Company logo (shield with SS)
2. **security-team.jpg** - Professional security team photo
3. **event-security.jpg** - Event security/bouncers photo
4. **bodyguard.jpg** - Professional bodyguard photo
5. **about-banner.jpg** - Company headquarters/office photo

---

## ✨ Animations & Effects

- **Fade-in animations** - Sections animate in on scroll
- **Blob animations** - Animated gradient blobs in hero
- **Hover effects** - All interactive elements have smooth transitions
- **Scale transforms** - Cards scale up on hover
- **Color transitions** - Smooth theme switching
- **Gradient animations** - Bottom border animations on hover

---

## 🌓 Theme Toggle

- **Location:** Top-right corner of navbar
- **Icons:** Sun (light mode), Moon (dark mode)
- **Storage:** LocalStorage saves user preference
- **Duration:** 0.3s smooth transition
- **Coverage:** Entire page theme changes

---

## 📞 Contact Information

- **Phone:** +92 304 2775661
- **Email:** contact@sssecurity.pk
- **Availability:** 24/7

---

## 🔗 Navigation Structure

```
Home (/)
├── Services (/services)
├── About Us (/about)
├── Contact Us (/contact)
└── All pages link back to Home
```

All navigation links are in the navbar and accessible from every page.

---

## 💾 File Structure

```
/app
├── layout.tsx (with dark theme script)
├── page.tsx (home page)
├── globals.css (theme colors + animations)
├── /services
│   └── page.tsx
├── /about
│   └── page.tsx
└── /contact
    └── page.tsx

/components
├── navbar.tsx
├── hero.tsx
├── services.tsx
├── weapons.tsx
├── why-choose-us.tsx
├── contact.tsx
├─�� footer.tsx
└── video-banner.tsx

/public
├── ss-logo.png
├── security-team.jpg
├── event-security.jpg
├── bodyguard.jpg
└── about-banner.jpg
```

---

## 🚀 Live Features

- ✅ Dark/Light theme toggle
- ✅ Smooth animations and transitions
- ✅ Professional images on all pages
- ✅ Video banner (image-based) on dedicated pages
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Contact form with validation
- ✅ Call-to-action buttons throughout
- ✅ Hover effects on all interactive elements
- ✅ Accessible navigation

---

## 📱 Responsive Design

- **Mobile:** Optimized for small screens with stacked layout
- **Tablet:** Medium layout adjustments
- **Desktop:** Full-width with multi-column grids

All images use Next.js Image component for optimization.
