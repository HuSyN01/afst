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
      ],
    }),
  ],

  adapter: cloudflare(),
});
