# GastroSoftware Web App

Next.js web application for GastroSoftware with Material-UI theme.

## Quick Start

```bash
docker compose -f docker-compose.dev.yml up
```

The application will be available at `http://localhost:3002`

## Theme

This project uses a custom Material-UI theme based on the GastroSoftware mobile app's color palette.

- **Theme Documentation**: See [app/theme/README.md](./app/theme/README.md) for detailed usage instructions
- **Theme Preview**: Visit `/theme` route to see all available colors

## Development

```bash
# Development mode with hot reload
docker compose -f docker-compose.dev.yml up

# Production build
docker compose up --build
```

## Project Structure

- `app/theme/` - Theme configuration and documentation
- `app/components/` - Reusable React components
- `app/` - Next.js app router pages
