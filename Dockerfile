# Base image using Node 24.13.0
FROM node:24.13.0-alpine AS base

# Dependencies installation stage
FROM base AS deps
# Set working directory for package manager cache
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package.json
COPY package.json ./
# Install dependencies
RUN npm install

# Build stage
FROM base AS builder
WORKDIR /app
# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
# Copy source code
COPY . .

# Next.js build (environment variables can be set)
ENV NEXT_TELEMETRY_DISABLED 1
ENV DOCKER=true

# Run production build
RUN npm run build

# Production runtime stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create system user (run as non-root user for security)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy Next.js build artifacts
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3002

ENV PORT=3002
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
