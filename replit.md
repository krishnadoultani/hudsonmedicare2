# Hudson Healthcare Solutions - Web Application

## Overview

This is a full-stack web application for Hudson Healthcare Solutions, a healthcare technology company specializing in software solutions for modern healthcare providers. The application features a modern, responsive design built with React and TypeScript on the frontend, Express.js on the backend, and uses PostgreSQL with Drizzle ORM for data management. The site showcases the company's healthcare software solutions and provides contact functionality for potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **UI Components**: Radix UI primitives with custom styling through shadcn/ui
- **Form Handling**: React Hook Form with Zod validation schemas
- **Design System**: Dark theme with custom healthcare-focused color palette (orange primary color)

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reloading with Vite integration for development mode
- **API Structure**: RESTful API with `/api` prefix for all endpoints
- **Middleware**: Custom logging middleware for API request monitoring
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Data Layer
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema**: Shared schema definitions between frontend and backend
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Validation**: Zod schemas for runtime type validation
- **Storage Interface**: Abstracted storage interface supporting both memory storage (development) and database storage

### Development and Build
- **Bundling**: Vite for frontend, esbuild for backend production builds
- **TypeScript**: Strict type checking across the entire codebase
- **Path Aliases**: Configured path mapping for clean imports (`@/`, `@shared/`)
- **Environment**: Separate development and production configurations
- **Hot Reload**: Vite HMR for frontend development

## External Dependencies

### Database Services
- **PostgreSQL**: Primary database using Neon Database serverless PostgreSQL
- **Connection**: `@neondatabase/serverless` for optimized serverless connections

### UI and Styling
- **Radix UI**: Complete set of accessible UI primitives including dialogs, dropdowns, forms, and navigation
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind CSS
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Replit Integration**: Cartographer plugin for development environment integration
- **Error Overlay**: Runtime error modal for development debugging
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

### Form and Data Management
- **TanStack React Query**: Server state management, caching, and synchronization
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API data
- **date-fns**: Date utility library for date formatting and manipulation

### Communication Services
- **Formspree**: Contact form submission handling (placeholder implementation)
- **Google Maps**: Address linking for location information

### Build and Runtime
- **Vite**: Fast build tool and development server
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution for development server