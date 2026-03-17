import { test as base, Page } from '@playwright/test';

/**
 * Fixture for authenticated user context
 */
type AuthFixtures = {
  authenticatedPage: Page;
};

/**
 * Extended test function with authentication fixture
 */
export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page, browserName }, use) => {
    // Navigate to home
    await page.goto('/');

    // Wait for Clerk authentication to load
    // Note: This is a placeholder - adjust based on your actual Clerk implementation
    await page.waitForLoadState('networkidle');

    // Set test user token if available from environment
    const testToken = process.env.TEST_USER_TOKEN;
    if (testToken) {
      await page.evaluate((token) => {
        localStorage.setItem('clerk-auth-token', token);
      }, testToken);
    }

    // Use the fixture
    await use(page);
  },
});

export { expect } from '@playwright/test';

/**
 * Helper functions for common test operations
 */
export const helpers = {
  /**
   * Login with test credentials (for apps without Clerk)
   */
  async loginWithCredentials(page: Page, email: string, password: string) {
    await page.click('[data-testid="login-button"]');
    await page.fill('[data-testid="email-input"]', email);
    await page.fill('[data-testid="password-input"]', password);
    await page.click('[data-testid="submit-button"]');
    await page.waitForNavigation({
      url: /.*dashboard.*/,
      waitUntil: 'networkidle',
    });
  },

  /**
   * Navigate to a specific section
   */
  async navigateTo(page: Page, path: string) {
    await page.goto(path);
    await page.waitForLoadState('networkidle');
  },

  /**
   * Wait for element and check if visible
   */
  async waitForElement(page: Page, selector: string, timeout = 5000) {
    await page.waitForSelector(selector, { timeout });
    return page.isVisible(selector);
  },

  /**
   * Fill form and submit
   */
  async fillAndSubmitForm(
    page: Page,
    formData: Record<string, string>,
    submitSelector = 'button[type="submit"]',
  ) {
    for (const [testId, value] of Object.entries(formData)) {
      const selector = `[data-testid="${testId}"]`;
      await page.fill(selector, value);
    }
    await page.click(submitSelector);
  },

  /**
   * Check if user is authenticated by looking for dashboard elements
   */
  async isAuthenticated(page: Page): Promise<boolean> {
    try {
      await page.waitForSelector('[data-testid="dashboard-header"]', {
        timeout: 2000,
      });
      return true;
    } catch {
      return false;
    }
  },

  /**
   * Close any modal dialogs
   */
  async closeModal(page: Page) {
    const closeButton = page.locator('[data-testid="modal-close"]');
    if (await closeButton.isVisible()) {
      await closeButton.click();
    }
  },
};
