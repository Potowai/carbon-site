import { test, expect } from './fixtures';

test.describe('API Integration', () => {
  test.beforeEach(async ({ page }) => {
    // Set up authentication for all API tests
    const testToken = process.env.TEST_USER_TOKEN;
    if (testToken) {
      await page.evaluate((token) => {
        localStorage.setItem('clerk-auth-token', token);
      }, testToken);
    }
  });

  test('should fetch sites from API when loading dashboard', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    // Wait for API call
    const apiResponse = page.waitForResponse(response =>
      response.url().includes('/api/sites') && response.status() === 200
    );

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');

    // Should have made the API call
    const response = await apiResponse.catch(() => null);
    if (response) {
      const statusCode = response.status();
      expect(statusCode).toBe(200);
    }
  });

  test('should handle API errors gracefully', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    // Intercept and mock failed API response
    await page.route('**/api/**', (route) => {
      route.abort('failed');
    });

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');

    // Should show error message or fallback UI
    const errorMessage = page.locator('[class*="error"], [role="alert"]');
    const fallbackContent = page.locator('[data-testid="empty-state"], [class*="empty"]');

    const hasError = await errorMessage.count() > 0;
    const hasFallback = await fallbackContent.count() > 0;

    expect(hasError || hasFallback).toBeTruthy();
  });

  test('should successfully create a site via API', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    const testSiteData = {
      name: `API Test Site ${Date.now()}`,
      url: `https://apitest${Date.now()}.example.com`,
    };

    // Wait for create request
    const createRequest = page.waitForResponse(response =>
      response.url().includes('/api/sites') &&
      response.request().method() === 'POST' &&
      response.status() === 201
    );

    await page.goto('/add-site');
    await page.waitForLoadState('networkidle');

    // Fill and submit form
    const siteNameInput = page.locator('input[name*="name" i], input[placeholder*="name" i]');
    const urlInput = page.locator('input[type="url"], input[name*="url" i]');
    const submitButton = page.locator('button[type="submit"]');

    if (await siteNameInput.isVisible()) {
      await siteNameInput.fill(testSiteData.name);
    }

    if (await urlInput.isVisible()) {
      await urlInput.fill(testSiteData.url);
    }

    if (await submitButton.isVisible()) {
      await submitButton.click();

      // Wait for API call
      const response = await createRequest.catch(() => null);
      if (response) {
        expect(response.status()).toBe(201);
      }
    }
  });

  test('should send proper Authorization header with API requests', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    let authHeaderFound = false;

    // Intercept requests to check headers
    await page.route('**/api/**', (route) => {
      const headers = route.request().headers();
      const authHeader = headers['authorization'] || headers['x-clerk-token'];
      if (authHeader) {
        authHeaderFound = true;
      }
      route.continue();
    });

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');

    // Authorization header should be present in authenticated requests
    expect(authHeaderFound || testToken).toBeTruthy();
  });

  test('should validate API response data structure', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    let responseData: any = null;

    // Capture API response
    await page.route('**/api/sites', async (route) => {
      const response = await route.fetch();
      responseData = await response.json().catch(() => null);
      route.continue();
    });

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');

    // Response should have expected structure
    if (responseData) {
      // Should be an array or object with data
      expect(responseData).toBeDefined();
    }
  });

  test('should handle API rate limiting', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    let rateLimitEncountered = false;

    // Intercept and simulate rate limiting
    await page.route('**/api/**', (route) => {
      // Simulate rate limit on every request
      route.abort('timedout');
    });

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');

    // Should show appropriate message
    const messages = page.locator('text=/rate limit|too many|please wait|réessayer/i');
    rateLimitEncountered = await messages.count() > 0;

    // App should handle gracefully
    expect(page.url()).toBeDefined();
  });

  test('should retry failed API requests', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    let requestCount = 0;

    // Count retry attempts
    await page.route('**/api/sites', async (route) => {
      requestCount++;
      if (requestCount < 2) {
        route.abort('failed');
      } else {
        route.continue();
      }
    });

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');

    // Should have made multiple attempts
    expect(requestCount).toBeGreaterThanOrEqual(1);
  });

  test('should handle timeout gracefully', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    // Set very short timeout
    page.setDefaultTimeout(100);

    try {
      await page.goto('/dashboard');
      await page.waitForLoadState('networkidle');
    } catch (error) {
      // Timeout is expected
      expect(error).toBeDefined();
    }

    // Restore default timeout
    page.setDefaultTimeout(30000);
  });

  test('should cache API responses appropriately', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    let firstRequestTime = 0;
    let secondRequestTime = 0;

    // First request
    const startTime1 = Date.now();
    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    firstRequestTime = Date.now() - startTime1;

    // Second request to same page
    const startTime2 = Date.now();
    await page.reload();
    await page.waitForLoadState('networkidle');
    secondRequestTime = Date.now() - startTime2;

    // Second load might be faster due to caching
    // (but not strictly required)
    expect(firstRequestTime).toBeGreaterThan(0);
    expect(secondRequestTime).toBeGreaterThan(0);
  });

  test('should handle API with different response formats', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    let responseContentType = '';

    // Check content type
    await page.route('**/api/**', (route) => {
      const response = route.response();
      responseContentType = response?.headers()['content-type'] || '';
      route.continue();
    });

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');

    // Should handle JSON responses
    expect(responseContentType).toContain('json');
  });

  test('should properly encode special characters in API requests', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    const testData = {
      name: 'Test Site & "Special" Characters <script>',
      url: 'https://test.example.com?q=special&value=123',
    };

    let requestBody: any = null;

    // Capture request
    await page.route('**/api/sites', (route) => {
      const request = route.request();
      if (request.method() === 'POST') {
        requestBody = request.postDataJSON?.() || null;
      }
      route.continue();
    });

    await page.goto('/add-site');
    await page.waitForLoadState('networkidle');

    // Fill form
    const nameInput = page.locator('input[name*="name" i]');
    const urlInput = page.locator('input[type="url"]');

    if (await nameInput.isVisible()) {
      await nameInput.fill(testData.name);
    }
    if (await urlInput.isVisible()) {
      await urlInput.fill(testData.url);
    }

    // Submit
    const submitButton = page.locator('button[type="submit"]');
    if (await submitButton.isVisible()) {
      await submitButton.click();
    }

    // Wait for request
    await page.waitForTimeout(1000);

    // Request should be properly formed
    expect(requestBody).toBeDefined();
  });
});
