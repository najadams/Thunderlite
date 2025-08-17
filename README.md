# Thunderlite - Verdant Restaurant Website

A modern, elegant restaurant website built with React, TypeScript, and Tailwind CSS. Thunderlite showcases "Verdant" - a fine dining establishment that offers exquisite culinary experiences, private chef services, event catering, and culinary education.

## 🌟 Features

### Restaurant Showcase
- **Hero Section**: Stunning visual presentation with elegant typography
- **Menu Highlights**: Featured dishes with beautiful imagery and descriptions
- **Services**: Private chef, event catering, and culinary classes
- **Success Stories**: Customer testimonials and event showcases
- **Contact Information**: Easy-to-find contact details and inquiry forms

### Design & User Experience
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, elegant interface with custom animations
- **Brand Colors**: Custom green and violet color palette
- **Typography**: Inter and Playfair Display fonts for modern elegance
- **Smooth Animations**: Fade-in, slide-in, and scale animations
- **Wavy Separators**: Custom CSS for section transitions

### Technical Features
- **Full-width Layout**: Optimized to use entire screen real estate
- **Dark Mode Support**: Built-in dark theme capabilities
- **Component Library**: Comprehensive UI components using Radix UI
- **Type Safety**: Full TypeScript implementation
- **Modern Build Tools**: Vite for fast development and building

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.1** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful, customizable icons
- **Custom CSS** - Brand-specific animations and utilities

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Class Variance Authority** - Component variant management
- **clsx & tailwind-merge** - Conditional CSS class utilities

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd thunderlite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
thunderlite/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── figma/         # Figma-exported components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── HeroSection.tsx # Main hero section
│   │   ├── MenuHighlights.tsx # Featured menu items
│   │   ├── ServicesSection.tsx # Services offered
│   │   ├── SuccessShowcase.tsx # Success stories
│   │   ├── TestimonialsSection.tsx # Customer reviews
│   │   ├── ContactSection.tsx # Contact information
│   │   └── Footer.tsx     # Site footer
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles and Tailwind imports
│   ├── globals.css        # Custom CSS variables and utilities
│   └── App.css            # Application-specific styles
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies and scripts
```

## 🎨 Customization

### Brand Colors
The website uses a custom color palette defined in `src/globals.css`:
- **Green Primary**: `#4CAF50` - Main brand color
- **Violet Primary**: `#7E57C2` - Secondary brand color
- **Neutral Colors**: Various shades for backgrounds and text

### Typography
- **Display Font**: Playfair Display (headings and elegant text)
- **Body Font**: Inter (body text and UI elements)

### Animations
Custom animations are available as utility classes:
- `.fade-in-up` - Fade in with upward motion
- `.slide-in-left` - Slide in from the left
- `.scale-in` - Scale in animation
- `.bottom-wave-*` - Wavy bottom borders

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Static Hosting
The built files can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Support

For questions or support, please contact the development team or create an issue in the repository.

---

**Thunderlite** - Bringing elegant dining experiences to the digital world. 🍽️✨