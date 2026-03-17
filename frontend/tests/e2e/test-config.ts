/**
 * Test Configuration and Constants
 */

export const testConfig = {
  // Timeouts
  SHORT_TIMEOUT: 2000,
  MEDIUM_TIMEOUT: 5000,
  LONG_TIMEOUT: 10000,
  API_TIMEOUT: 15000,

  // Retry configuration
  MAX_RETRIES: 2,
  RETRY_DELAY: 1000,

  // Performance budgets (in milliseconds)
  PERFORMANCE_BUDGETS: {
    homePage: 3000,
    dashboard: 5000,
    addSitePage: 2000,
    apiCall: 1000,
    slowPageLoad: 5000,
  },

  // Viewport sizes
  VIEWPORTS: {
    mobile: { width: 375, height: 667 }, // iPhone SE
    tablet: { width: 768, height: 1024 }, // iPad
    desktop: { width: 1920, height: 1080 }, // Full HD
    desktop4k: { width: 3840, height: 2160 }, // 4K
  },

  // Test data
  TEST_SITE_DATA: {
    name: 'Test Site',
    url: 'https://test.example.com',
    description: 'Test site for E2E testing',
  },

  // API endpoints
  API_ENDPOINTS: {
    sites: '/api/sites',
    siteDetail: '/api/sites/:id',
    estimateCarbon: '/api/sites/estimate',
    dashboard: '/api/sites/global-dashboard',
  },

  // Wait conditions
  WAIT_CONDITIONS: {
    networkIdle: 'networkidle' as const,
    domContentLoaded: 'domcontentloaded' as const,
    load: 'load' as const,
  },

  // Test data selectors
  SELECTORS: {
    // Global
    body: 'body',
    main: 'main',
    navbar: 'nav',
    header: 'header',
    footer: 'footer',

    // Form elements
    input: 'input',
    button: 'button',
    select: 'select',
    textarea: 'textarea',
    form: 'form',

    // Interactive elements
    link: 'a',
    clickable: 'button, a, [role="button"]',
    focusable: 'button, a, input, select, textarea, [tabindex]',
  },

  // Accessibility
  ACCESSIBILITY: {
    minColorContrast: 4.5, // WCAG AA standard
    maxLoadTime: 5000,
    maxDOMElements: 10000,
  },

  // Browser settings
  BROWSER: {
    ignoreHTTPSErrors: true,
    headless: true,
  },

  // Video/Screenshot settings
  RECORDING: {
    video: 'retain-on-failure' as const,
    screenshot: 'only-on-failure' as const,
    trace: 'on-first-retry' as const,
  },
};

/**
 * Test environment detection
 */
export const isCI = !!process.env.CI;
export const isDevelopment = !isCI;
export const baseURL = process.env.BASE_URL || 'http://localhost:4200';
export const apiURL = process.env.API_URL || 'http://localhost:3000';

/**
 * Test data generators
 */
export const testDataGenerators = {
  generateSiteName: () => `Test Site ${Date.now()}`,
  generateSiteURL: () => `https://test${Date.now()}.example.com`,
  generateEmail: () => `test${Date.now()}@example.com`,
  generatePassword: () => `TestPass${Date.now()}!`,
};

/**
 * Assertion helpers
 */
export const assertionHelpers = {
  isValidEmail: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  isValidURL: (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
  isValidJWT: (token: string) => /^[\w-]*\.[\w-]*\.[\w-]*$/.test(token),
};

/**
 * Wait helpers for common patterns
 */
export const waitPatterns = {
  // Wait for element to be visible
  elementVisible: (selector: string) => `${selector}:visible`,

  // Wait for element to have text
  elementWithText: (selector: string, text: string) => `${selector}:has-text("${text}")`,

  // Wait for element to be enabled
  elementEnabled: (selector: string) => `${selector}:enabled`,

  // Wait for attribute to equal value
  attributeEquals: (selector: string, attr: string, value: string) =>
    `${selector}[${attr}="${value}"]`,
};
