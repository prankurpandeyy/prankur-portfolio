# Prankur Portfolio - Full Stack Developer Portfolio Website

A modern, elegant, and vibrant portfolio website built with React, Tailwind CSS, and Framer Motion. Inspired by clean design principles with bold black borders and coral accent colors.

## Features

- 🎨 **Modern Design**: Clean, vibrant design with bold borders and smooth animations
- 📱 **Fully Responsive**: Works seamlessly on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal performance
- 🎭 **Smooth Animations**: Powered by Framer Motion for engaging interactions
- 📝 **Professional Sections**:
  - Hero section with call-to-action buttons
  - Skills showcase
  - Tech stack display
  - Featured projects
  - Latest articles
  - Services & pricing
  - Contact form
  - Terms & conditions accordion

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
prankur-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── TechStack.jsx
│   │   ├── Projects.jsx
│   │   ├── Articles.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── TermsAccordion.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
- `coral`: Main accent color (default: #FF6B6B)
- `border.dark`: Border color (default: #000000)

### Content

Update the content in each component file:
- `src/components/Hero.jsx` - Hero section content
- `src/components/Skills.jsx` - Skills and services
- `src/components/Projects.jsx` - Project showcase
- `src/components/Articles.jsx` - Articles and publications
- `src/components/Pricing.jsx` - Pricing plans
- `src/components/Contact.jsx` - Contact information

### Animations

Animations are powered by Framer Motion. Customize animations in each component using Framer Motion props like `initial`, `animate`, `whileHover`, etc.

## License

This project is open source and available under the MIT License.

