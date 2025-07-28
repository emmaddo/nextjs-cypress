import {defineConfig} from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000"
  },
  video: true,
  videosFolder: "cypress/videos",
  retries: {
    experimentalStrategy: "detect-flake-and-pass-on-threshold",
    experimentalOptions: {
      maxRetries: 2,
      passesRequired: 1
    },
    runMode: true,
    openMode: true,
  }
});