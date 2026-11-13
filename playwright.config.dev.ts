import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';


const ENV = process.env.ENV || "dev";
dotenv.config({path:'./config/.env'})
console.log('---Reading the env file---')
let baseURL;
let username;
let password;
if(ENV==="dev"){
   baseURL = process.env.DEV_BASE_URL;
   username = process.env.DEV_USERNAME;
   password = process.env.DEV_PASSWORD;
}

console.log('Environment:', ENV);
console.log('Base URL:', baseURL);






/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],
            ['allure-playwright']
],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  
  //timeout:,
  use: {

    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: baseURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot:'on',
    video:'on',
    headless:!!process.env.CI,
  },

  metadata:{
    username:username,
    password:password
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'],
    //      viewport:{width:1920,height:100},
    //     launchOptions:{
    //       args:[],
    //       ignoreDefaultArgs:['--window-size=1280,720']
    //     }
    //    },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'],
    //     viewport:{width:1920,height:100},
    //     launchOptions:{
    //       args:[],
    //       ignoreDefaultArgs:['--window-size=1280,720']
    //     }

    //    },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'],
    //      viewport:{width:1920,height:100},
    //     launchOptions:{
    //       args:[],
    //       ignoreDefaultArgs:['--window-size=1280,720']
    //     }
    //    },
      
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: {
        channel: 'msedge',
         viewport:null,
        launchOptions:{
          args:['--start-maximized'],
          ignoreDefaultArgs:['--window-size=1280,720']
        }
        
       },
    },
//     {
//       name: 'Google Chrome',
//       use: { 
//         channel: 'chrome',
//         viewport:null,
//         launchOptions:{
//           args:['--start-maximized'],
//           ignoreDefaultArgs:['--window-size=1280,720']
//         }
//       },
//     },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
