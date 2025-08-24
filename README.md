# Portfolio Application - Asutosh Panigrahi

## Overview

This is a personal portfolio web application built for Asutosh Panigrahi, showcasing his work as a UI/UX Designer, Salesforce Developer, and Frontend Explorer. The application features a clean, minimalist design with a Yin-Yang inspired dark/light theme toggle, built using React.js with modern web technologies. The portfolio includes sections for hero introduction, about information, work experience and projects, resume downloads, and a contact form with email functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript for type safety and better development experience
- **Routing**: Wouter library for lightweight client-side routing with single-page application behavior
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Component Library**: Radix UI primitives with shadcn/ui design system providing accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for consistent theming and responsive design
- **Theme System**: Custom theme provider supporting dark/light/system themes with localStorage persistence

### Backend Architecture
- **Runtime**: Express.js server with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL with schema-first development
- **Development**: Vite integration for hot module replacement and fast development builds
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development, designed to easily swap to database storage

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Schema Validation**: Zod schemas integrated with Drizzle for runtime type validation
- **Migrations**: Drizzle Kit for database schema migrations and management

### Design System
- **Typography**: Poppins/Inter for headings, Open Sans for body text, JetBrains Mono for code
- **Color Palette**: Deep navy, charcoal black, white base with emerald green accents
- **Component Variants**: Consistent design tokens for colors, spacing, shadows, and typography
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Animation System
- **CSS Animations**: Custom keyframes for Yin-Yang loader and floating elements
- **Smooth Scrolling**: JavaScript-based smooth scrolling for navigation between sections
- **Transitions**: Tailwind CSS transition utilities for hover states and theme switching

## External Dependencies

### Development Tools
- **Vite**: Build tool with React plugin and runtime error overlay for Replit environment
- **TypeScript**: Type checking with strict mode enabled for better code quality
- **ESBuild**: Fast bundling for production builds

### Database & ORM
- **Neon Database**: PostgreSQL serverless database using @neondatabase/serverless driver
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect and automatic schema generation
- **Database Connection**: Environment-based configuration with DATABASE_URL

### UI & Styling
- **Radix UI**: Comprehensive primitive component library for accessibility
- **Tailwind CSS**: Utility-first CSS framework with PostCSS integration
- **shadcn/ui**: Pre-built component library built on Radix UI primitives
- **Class Variance Authority**: Type-safe styling variants for component consistency

### Email Integration
- **EmailJS**: Client-side email sending service for contact form functionality
- **Environment Configuration**: VITE_EMAILJS_* environment variables for service configuration

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **Session Security**: Configured for secure session handling in production

### Utilities
- **date-fns**: Date manipulation and formatting utilities
- **clsx/twMerge**: Conditional CSS class name utilities
- **Wouter**: Minimalist routing library for single-page application navigation
