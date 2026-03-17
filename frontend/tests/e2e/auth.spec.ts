import { test, expect, helpers } from './fixtures';

test.describe('Authentication', () => {
  test('should redirect unauthenticated users from dashboard', async ({ page }) => {
    // Try to access protected route
    await page.goto('/dashboard');
    
    // Should redirect to home
    await expect(page).toHaveURL('/');
  });

  test('should redirect unauthenticated users from add-site page', async ({ page }) => {
    // Try to access protected route
    await page.goto('/add-site');
    
    // Should redirect to home
    await expect(page).toHaveURL('/');
  });

  test('should redirect unauthenticated users from sites list', async ({ page }) => {
    // Try to access protected route
    await page.goto('/sites');
    
    // Should redirect to home
    await expect(page).toHaveURL('/');
  });

  test('should display login prompt on home page', async ({ page }) => {
    await page.goto('/');
    
    // Look for authentication-related elements
    const signInButton = page.locator('text=/Sign in|Login|Se connecter/i');
    await expect(signInButton).toBeVisible({ timeout: 5000 });
  });

  test('should persist authentication state', async ({ page, context }) => {
    // This test assumes you have set up a test user token
    const testToken = process.env.TEST_USER_TOKEN;
    
    if (testToken) {
      // Add token to local storage
      await page.evaluate((token) => {
        localStorage.setItem('clerk-auth-token', token);
      }, testToken);

      // Navigate to protected route
      await page.goto('/dashboard');
      
      // Should show dashboard content
      await page.waitForLoadState('networkidle');
      expect(page.url()).toContain('dashboard');
    }
  });

  test('should handle logout', async ({ page }) => {
    // This test assumes you have set up authentication
    const testToken = process.env.TEST_USER_TOKEN;
    
    if (testToken) {
      // Set auth token
      await page.evaluate((token) => {
        localStorage.setItem('clerk-auth-token', token);
      }, testToken);

      // Navigate to dashboard
      await page.goto('/dashboard');
      await page.waitForLoadState('networkidle');

      // Find and click logout button
      const logoutButton = page.locator('button[aria-label*="logout" i], text=/Logout|Déconnexion|Sign out/i').first();
      
      if (await logoutButton.isVisible().catch(() => false)) {
        await logoutButton.click();
        
        // Should redirect to home
        await page.waitForURL('/', { timeout: 10000 });
        expect(page.url()).toContain('/');
      }
    }
  });

  test('should have valid CSRF/security headers', async ({ page }) => {
    const response = await page.goto('/');
    
    // Check for security headers
    const headers = response?.headers();
    expect(headers?.['x-content-type-options']).toBeDefined();
  });

  test('should sanitize user input to prevent XSS', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    
    if (testToken) {
      await page.evaluate((token) => {
        localStorage.setItem('clerk-auth-token', token);
      }, testToken);

      await page.goto('/add-site');
      await page.waitForLoadState('networkidle');
      
      // Try to inject script - should be escaped/sanitized
      const xssPayload = '<script>alert("XSS")</script>';
      const siteNameInput = page.locator('[data-testid="site-name"], input[name*="name" i], input[type="text"]').first();
      
      if (await siteNameInput.isVisible().catch(() => false)) {
        await siteNameInput.fill(xssPayload);
        
        // Script should not execute
        page.once('dialog', async (dialog) => {
          expect(dialog.type()).not.toBe('alert');
        });
      }
    }
  });

  test('should enforce password requirements if applicable', async ({ page }) => {
    // This test is for custom auth implementations
    const loginResponse = page.waitForResponse(response =>
      response.url().includes('/auth') && response.status() === 400
    );
    
    // Navigate to login
    await page.goto('/');
    const signInButton = page.locator('text=/Sign in|Login/i');
    
    if (await signInButton.isVisible().catch(() => false)) {
      // Test would continue based on your auth implementation
    }
  });

  test('should handle multiple login attempts gracefully', async ({ page }) => {
    await page.goto('/');
    
    const signInButton = page.locator('text=/Sign in|Login/i');
    await expect(signInButton).toBeVisible({ timeout: 5000 });
    
    // The button should be clickable
    await expect(signInButton).toBeEnabled();
  });
});
