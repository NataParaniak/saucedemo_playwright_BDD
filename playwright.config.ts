import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";
import 'dotenv/config';

const testDir = defineBddConfig({


  features: "./features/*.feature",
  steps: "./steps/*.ts",
});

export default defineConfig({
  testDir,
  workers: 4,
  retries: 2,
  
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
  },

  reporter: [
    ["list"],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],

  projects: [
    {
      name: "Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "Firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },

    {
      name: "Safari",
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],
});
