# Overview

This is a full-stack web application built as a learning hub for Rozetka sellers. The application features a seller dashboard that provides educational content, course recommendations, learning progress tracking, and webinar scheduling. It's designed to integrate seamlessly with the existing Rozetka seller ecosystem, mimicking the visual style and user experience of the current platform.

The application serves as a prototype for a "Seller Hub" or "Academy" section that would help Rozetka marketplace sellers improve their business through structured learning paths, personalized course recommendations, and educational resources.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Components**: Shadcn/ui component library built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation schemas

## Backend Architecture
- **Runtime**: Node.js with TypeScript using TSX for development
- **Framework**: Express.js for the REST API server
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: Vite middleware integration for hot module replacement

## Styling and Design System
- **Component Library**: Shadcn/ui with "new-york" style variant
- **Color Scheme**: Custom Rozetka brand colors including signature green (#00A046)
- **Typography**: Segoe UI system font stack for Windows compatibility
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Theme System**: CSS custom properties for consistent theming

## Data Layer
- **Database**: PostgreSQL with Drizzle ORM
- **Schema**: User management system with username/password authentication
- **Migrations**: Drizzle Kit for database schema migrations
- **Connection**: Neon Database serverless PostgreSQL connector

## Development Environment
- **Package Manager**: NPM with lockfile for dependency management
- **Build System**: ESBuild for production server bundling, Vite for client bundling
- **Development Server**: Integrated Vite middleware with Express for full-stack development
- **Type Safety**: Shared TypeScript schemas between client and server

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Connection Pooling**: Built-in Neon connection management

## UI and Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component for course recommendations
- **Class Variance Authority**: Type-safe variant API for component styling

## Development and Build Tools
- **Vite**: Modern build tool with HMR and optimized bundling
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **Replit Integration**: Development environment compatibility and error handling

## Validation and Forms
- **Zod**: Schema validation library for type-safe data handling
- **React Hook Form**: Performant form library with minimal re-renders
- **Drizzle Zod**: Integration between Drizzle schemas and Zod validation

## Utility Libraries
- **Date-fns**: Date manipulation and formatting
- **CLSX/Tailwind Merge**: Conditional CSS class handling
- **Nanoid**: Unique ID generation for components and sessions

## Development Dependencies
- **TypeScript**: Static type checking across the entire stack
- **Tailwind CSS**: Utility-first CSS framework
- **Various Radix UI components**: Dialog, dropdown, toast, and other interactive elements