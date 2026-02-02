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
# Development mode with hot reload (dependencies are installed automatically on container start)
docker compose -f docker-compose.dev.yml up

# Production build (builds the optimized Next.js app image)
docker compose up --build
```

> Note: The first `docker compose -f docker-compose.dev.yml up --build` can take longer because it installs all npm dependencies inside the container. Subsequent runs will be faster thanks to the `node_modules` volume cache.

### Resetting the development containers

Use the following commands when you want to completely restart the dev environment with a fresh build (for example after changing `Dockerfile.dev` or dependencies):

```bash
# Stop and remove existing containers, networks, and volumes defined in docker-compose.dev.yml
docker compose -f docker-compose.dev.yml down

# Rebuild the images and start the development containers with the latest changes
docker compose -f docker-compose.dev.yml up --build
```

## Project Structure

- `app/theme/` - Theme configuration and documentation
- `app/components/` - Reusable React components
- `app/` - Next.js app router pages
