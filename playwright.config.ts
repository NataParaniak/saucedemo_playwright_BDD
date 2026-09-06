import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
 workers: 2,
 retries: 2,

  use: {
    baseURL: 'https://www.saucedemo.com/v1',
    headless: true,
  },

  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'Safari',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});