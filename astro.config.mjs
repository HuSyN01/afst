// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "AFST",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ehtishamsajjad/tm",
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Getting Started", slug: "getting-started" },
            { label: "Prerequisites", slug: "prerequisites" },
            { label: "Tech Stack Overview", slug: "tech-stack" },
          ],
        },
        {
          label: "Module 01: Hello World",
          items: [
            {
              label: "Why Hono.js",
              slug: "hello-world/why-hono-js",
            },
            {
              label: "Simple API",
              slug: "hello-world/init",
            },
            {
              label: "Exercise",
              slug: "hello-world/exercise",
            },
          ],
        },
        {
          label: "Module 02: Frontend Development",
          items: [
            {
              label: "Project Setup",
              slug: "frontend-development/intro",
            },
            {
              label: "React Fundamentals",
              slug: "frontend-development/react-fundamentals",
            },
            {
              label: "Why TanStack Router?",
              slug: "frontend-development/tanstack-router",
            },
            {
              label: "Exercise",
              slug: "frontend-development/exercise",
            },
          ],
        },
        {
          label: "Module 03: Backend API Development",
          items: [
            {
              label: "Introduction",
              slug: "backend-api-development/intro",
            },
            {
              label: "Routing Fundamentals",
              slug: "backend-api-development/routing",
            },
            {
              label: "Middleware",
              slug: "backend-api-development/middleware",
            },
            {
              label: "Mocking the API",
              slug: "backend-api-development/mocked-api",
            },
            {
              label: "Intro to Postman",
              slug: "backend-api-development/postman",
            },
            {
              label: "Exercise",
              slug: "backend-api-development/exercise",
            },
          ],
        },
        {
          label: "Module 04: Database & ORM",
          items: [
            {
              label: "Introduction",
              slug: "database-orm/intro",
            },
            {
              label: "Defining Schema",
              slug: "database-orm/drizzle-schema",
            },
            {
              label: "Migrations",
              slug: "database-orm/migrations",
            },
            {
              label: "Connecting Hono",
              slug: "database-orm/connecting-hono",
            },
            {
              label: "Exercise",
              slug: "database-orm/exercise",
            },
          ],
        },
        {
          label: "Module 05: Full-Stack Integration & Authentication",
          items: [
            {
              label: "Introduction",
              slug: "full-stack/intro",
            },
            {
              label: "TanStack Query",
              slug: "full-stack/tanstack-query",
            },
            {
              label: "CORS Configuration",
              slug: "full-stack/cors",
            },
            {
              label: "Better Auth",
              slug: "full-stack/better-auth",
            },
            {
              label: "Protected Routes",
              slug: "full-stack/protected-routes",
            },
            {
              label: "Exercise",
              slug: "full-stack/exercise",
            },
          ],
        },
        {
          label: "Module 06: Software Testing",
          items: [
            {
              label: "Introduction",
              slug: "software-testing/intro",
            },
            {
              label: "Backend Testing",
              slug: "software-testing/backend-testing",
            },
            {
              label: "Frontend Testing",
              slug: "software-testing/frontend-testing",
            },
            {
              label: "Exercise",
              slug: "software-testing/exercise",
            },
          ],
        },
        {
          label: "Module 07: Full-Stack Deployment",
          items: [
            { label: "Introduction", slug: "deployment/intro" },
            { label: "Cloudflare Setup", slug: "deployment/cloudflare-setup" },
            {
              label: "Production Database",
              slug: "deployment/production-database",
            },
            { label: "Deploying the App", slug: "deployment/deploying" },
            { label: "Debugging", slug: "deployment/debugging" },
            {
              label: "Capstone Workshop",
              slug: "deployment/capstone-workshop",
            },
            { label: "Exercise", slug: "deployment/exercise" },
          ],
        },
      ],
    }),
  ],

  adapter: cloudflare(),
});
